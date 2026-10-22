// Run real PostgreSQL semantics in an isolated, in-memory database. Never connects
// to production; bootstrap only replaces the external Auth/cron services.
import { PGlite } from 'file:///D:/personalApp/.toolchain/server-tests/node_modules/@electric-sql/pglite/dist/index.js';
import { pgcrypto } from 'file:///D:/personalApp/.toolchain/server-tests/node_modules/@electric-sql/pglite/dist/contrib/pgcrypto.js';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const canonical = 'D:/personalApp-admin/supabase';
const stage = resolve('artifacts/privacy-implementation/admin/supabase');
const db = await PGlite.create({ extensions: { pgcrypto } });
try {
  await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
    create schema auth; create schema extensions; create schema cron;
    create publication supabase_realtime;
    alter default privileges in schema public grant execute on functions to service_role;
    alter default privileges in schema public grant all on tables to service_role;
    create table auth.users(id uuid primary key,created_at timestamptz default now(),updated_at timestamptz default now());
    create function auth.uid() returns uuid language sql stable as $$
      select (nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'sub')::uuid $$;
    create function cron.schedule(text,text,text) returns bigint language sql as $$ select 1::bigint $$;`);
  // auth.uid returns a UUID, not an editable profile claim.
  await db.exec(`create or replace function auth.uid() returns uuid language sql stable as $$
    select (nullif(current_setting('request.jwt.claims',true),'')::jsonb->>'sub')::uuid $$;`);
  const migrations = (await readdir(canonical+'/migrations')).filter(n=>n.endsWith('.sql') && !n.endsWith('_privacy_retention.sql')).sort();
  for (const name of migrations) {
    let sql=await readFile(canonical+'/migrations/'+name,'utf8');
    sql=sql.replace(/create extension if not exists pg_cron with schema pg_catalog;/g,'');
    try { await db.exec(sql); } catch (e) { throw new Error(`Baseline migration ${name}: ${e.message}`); }
  }
  for (const name of (await readdir(stage+'/migrations')).filter(n=>n.endsWith('_privacy_retention.sql'))) {
    try { await db.exec(await readFile(stage+'/migrations/'+name,'utf8')); }
    catch(e) { throw new Error(`Privacy migration ${name}: ${e.message}`); }
  }
  const tests = ['core.sql','billing.sql','ai_privacy.sql','account_exit.sql','account_exit_missing_profile.sql',
    'admin_console.sql','admin_account_lifecycle.sql','device_google_import.sql'];
  for (const name of tests) {
    const testRoot = ['ai_privacy.sql','account_exit.sql'].includes(name) ? stage : canonical;
    await db.exec(await readFile(testRoot+'/tests/'+name,'utf8'));
    console.log('PASS baseline '+name);
  }
  await db.exec(await readFile(stage+'/tests/privacy_retention.sql','utf8'));
  console.log('PASS privacy retention, lifecycle, sharing, expiry and permissions');
} catch(e) { console.error(e.message, e.where || '', e.detail || ''); process.exitCode=1; }
finally { await db.close(); }
