"""Update reviewed policy text, operating instructions and regression scenarios."""
from pathlib import Path
from stage_privacy_changes import stage, ROOT

def append(repo,name,heading,text):
    p=stage(repo,name)
    old=p.read_text(encoding='utf-8')
    if heading not in old: p.write_text(old.rstrip()+'\n\n'+heading+'\n\n'+text.strip()+'\n',encoding='utf-8')

def main():
    p=stage('admin','supabase/tests/account_exit.sql')
    s=p.read_text(encoding='utf-8')
    s=s.replace("if not exists(select 1 from public.calendars where id='77100000-0000-0000-0000-000000000001' and owner_id is null and deleted_at is not null) then raise exception 'shared calendar lost'; end if;", "if exists(select 1 from public.calendars where id='77100000-0000-0000-0000-000000000001') then raise exception 'closed calendar retained'; end if;")
    s=s.replace("if not exists(select 1 from public.events where id='77300000-0000-0000-0000-000000000001' and created_by is null) then raise exception 'shared event cascaded'; end if;", "if exists(select 1 from public.events where id='77300000-0000-0000-0000-000000000001') then raise exception 'closed calendar content retained'; end if;")
    s=s.replace('preserved shared rows','removed explicitly closed shared rows')
    p.write_text(s,encoding='utf-8')

    p=stage('admin','test/server.test.mjs')
    s=p.read_text(encoding='utf-8')
    if 'privacy access audit excludes search text' not in s:
        s+='''
test('privacy access audit excludes search text and is required before delivering data', async t => {
  const id = '92000000-0000-0000-0000-000000000001';
  const f = await fixture(t, async url => {
    if (url.endsWith('/admin_list_users')) return Response.json({ rows: [{ user_id: id, nickname: 'synthetic-private-name' }] });
    return Response.json(null);
  });
  const auth = await login(f);
  const response = await f.request('/api/users?search=synthetic-private-name', { headers: { Cookie: auth.cookie } });
  assert.equal(response.status, 200);
  const audit = f.calls.find(c => c.url.endsWith('/record_admin_access'));
  assert.deepEqual(JSON.parse(audit.options.body), { action: 'admin_list_users', subject_ids: [id] });
  assert.equal(audit.options.body.includes('synthetic-private-name'), false);
  const blocked = await fixture(t, async url => url.endsWith('/record_admin_access')
    ? Response.json({}, { status: 503 }) : Response.json({ rows: [{ user_id: id }] }));
  const blockedAuth = await login(blocked);
  const rejected = await blocked.request('/api/users', { headers: { Cookie: blockedAuth.cookie } });
  assert.equal(rejected.status, 409);
  assert.equal(JSON.stringify(await rejected.json()).includes(id), false);
});
'''
        p.write_text(s,encoding='utf-8')

    guide='''# 개인정보 운영·적용 안내 (2026-10-20)

현재 상태: 로컬 구현·검증용. 운영 migration/Edge 배포, 자동 정리 활성화, 실제 호스팅 로그·백업 설정 확인과 공개 페이지 배포는 아직 완료되지 않았습니다. 공개 문서는 시행일을 확정하지 않은 검토본입니다.

## 보관 기준

- 회원·개인 캘린더·동의·회원 AI 기록: 회원 유지 중 사용하고 탈퇴 시 삭제. 직접 저장한 일정은 AI 결과의 24시간과 별개입니다.
- 다른 회원 소유 또는 이전한 공유 캘린더의 일정: 캘린더 유지 중 보관, 탈퇴 계정 연결 제거. 본문 속 이름이 자동 익명화되는 것은 아니며 별도 권리 요청을 처리합니다. 폐쇄 캘린더는 내용을 삭제합니다.
- 카톡·붙여넣기 원문: 기기 암호화, 7일 만료 후 정리. 기기 비활성 기간에는 다음 정리 실행까지 파일이 남을 수 있습니다.
- 서비스 AI 결과: 24시간 조회 후 기존 10분 주기 정리. 오류·분석 요청·사용량·재시도·결제 통지 운영 기록은 90일. 저장 일정의 불변 등록 출처는 최소 식별 정보로 유지하되 결과·입력 해시·모델 사용내역은 제거합니다. 이 참조를 삭제해 기존 일정 편집과 중복 방지를 깨뜨리지 않습니다.
- 최소 계약·거래 증빙과 구매 귀속 해시: 관측한 기록일부터 5년. 동일 구독의 주기적 재조회는 보관기한을 갱신하지 않습니다. 상품·상태·기간·제공된 주문 식별자만 기록하고 원 구매 토큰·입력 원문·사진·닉네임은 보존 테이블에 복제하지 않습니다. 과거 전체 거래나 누락 주문을 추정해 만들지 않습니다.
- 일반 개인정보 문의: 완료 후 90일. 불만·분쟁 처리 기록: 완료 후 3년. 지원 메일함과 private.privacy_support_cases의 만료일을 함께 관리합니다. 사건 본문은 DB에 복제하지 않습니다.
- 관리자 조회·작업 증적: 기본 1년. 법정 2년 대상이면 private.privacy_retention_policy.admin_access_years=2를 설정합니다. 일반 상세 스냅샷은 90일 후 제거합니다. 목록·회원·감사 이력 조회는 대상 ID·작업·접속자(local-admin)·접속지(로컬 전용)·시각만 기록하고 검색어나 별명을 복제하지 않습니다. Supabase Dashboard 등 이 관리자 외부 접근 기록의 보존 설정도 별도로 확인해야 합니다.

## 이메일 삭제·권리 요청

1. greatryuhg@gmail.com으로 접수합니다. 회원 ID를 몰라도 접수할 수 있고 앱 재설치를 요청의 필수 조건으로 삼지 않습니다.
2. ID·별명·발신 이메일만으로 삭제를 승인하지 않습니다. 기존 카카오 인증 계정의 소유 확인, 이미 검증된 문의 이력 또는 운영자가 가진 결제 증빙과의 대조 등 필요한 최소 본인 확인을 먼저 진행합니다. 비밀번호·OTP·인증 토큰·카드번호·신분증을 이메일로 요구하지 않습니다. 확인할 수 없으면 임의 삭제하지 않고 대체 확인 절차를 안내합니다.
3. 공유 캘린더 소유권 이전/폐쇄와 본문 속 특정 개인정보 삭제 범위를 확인합니다. 동의 철회와 계정 삭제를 구분하고 Play 정기결제 별도 취소를 안내합니다.
4. 로컬 관리자에서 삭제를 실행하고 Auth 삭제까지 완료되었는지 확인합니다. 처리 중 AI는 끝난 후 다시 시도하고, 삭제 준비 후 Auth 실패는 같은 작업으로 재시도합니다. 처리 결과·제한 사유를 회신하고 사건을 완료합니다.
5. 최소 처리 이력의 만료일을 사건 인덱스에 기록합니다. 운영자가 주기적으로 지원 메일함·첨부·발송함도 같은 만료일에 정리해야 합니다. SQL 작업이 Gmail까지 지우지는 않습니다.

## 운영 반영 순서

1. Supabase 연결을 재인증하고 실제 프로젝트·기존 migration 버전·비대칭 JWT 서명 키와 24시간 정리 작업을 확인합니다. 데이터 저장 리전, 로그 항목·보관기간, 백업/PITR/외부 사본 보관·복구 후 재삭제 절차를 확인해 공개 방침에 채웁니다. 저장소만으로 확인되지 않은 값을 임의로 확정하지 않습니다.
2. CLI가 생성한 20261020051653_privacy_retention.sql을 검토·적용합니다. 기존 자료의 자동 정리는 기본 disabled입니다. public.privacy_retention_preview()로 삭제·축약 대상 건수를 검토합니다. 이전에 폐쇄만 했던 공유 캘린더 내용도 정리 대상입니다.
3. account_lifecycle Edge를 verify_jwt=false로 배포합니다. 이 경로는 공개 익명 조회가 아니라, ES256/RS256 토큰의 서명·issuer·audience·role·subject를 검증한 본인 상태 조회 전용입니다. 만료 JWT도 과거 유효 시점 서명을 검증해 삭제 여부만 확인하며 다른 API 권한을 부여하지 않습니다. 키 교체·검증 실패·통신 실패만으로 기기 데이터를 지우지 않습니다.
4. verify_play_purchase, handle_play_rtdn, reconcile_subscriptions의 _shared/play.ts 변경을 함께 배포하고 기존 서버 검증·미승인 구매 처리 동작을 유지합니다. 앱에는 전체 방침 링크, 새 탈퇴 안내와 동의 v3를 반영합니다. 서버 필수 동의 버전과 앱은 함께 배포해야 합니다. 기존 v2 동의를 자동 승계하지 않습니다.
5. 권리 확인 후 합성 계정으로 로그인·동의·탈퇴·관리자 접수 및 다른 기기 정리를 확인합니다. 실제 기존 데이터 정리는 집계를 검토한 후 private.privacy_retention_policy.enabled=true로 활성화합니다. cron은 매시 17분에 실행하며 끄면 이후 자동 정리가 멈춥니다. 이미 삭제된 자료를 되살리는 롤백은 제공하지 않습니다.
6. 방침·삭제 페이지의 검토본 표시를 제거하고 실제 적용일을 시행일로 확정해 GitHub Pages에 게시합니다. 공개 URL과 앱 링크를 확인한 뒤에만 Play Console에 제출합니다. 기존 data.html의 기능 설명은 전체 방침과 구분합니다.

## 검증과 한계

격리된 인메모리 PostgreSQL에 기존 전체 migration을 순서대로 적용한 후 새 migration과 합성 SQL 테스트를 실행합니다. 테스트는 트랜잭션 안에서 롤백하며 운영 회원을 삭제하지 않습니다. Node 관리자 검사, Deno 토큰 서명 검사, Android 단위 테스트·빌드, 홈페이지 링크·번역·브라우저 검사를 함께 사용합니다. Supabase 운영 재인증이 필요해 운영 적용·호스팅 설정 확인·실계정·실기기 검증은 미완료입니다.
'''
    p=stage('admin','docs/privacy-retention.md'); p.write_text(guide,encoding='utf-8')
    append('admin','README.md','## 2026-10-20 개인정보 보관·삭제 기준',
           '새 migration·계정 상태 조회 Edge·관리자 접근 기록을 준비했습니다. 자동 정리는 기본 비활성이고 운영 반영은 미완료입니다. [적용 순서·보관 기준·이메일 요청 처리](docs/privacy-retention.md)를 먼저 확인하세요. 최신 기준은 폐쇄 공유 캘린더 내용을 삭제하고, 다른 소유자의 유지 중인 공유 일정은 계정 연결을 제거해 보존합니다. 위의 과거 폐쇄 후 내용 보존 설명보다 이 기준이 우선합니다.')
    append('app','docs/ai-privacy.md','## 2026-10-20 전체 방침·보관 기준 반영 준비',
           '전체 방침과 삭제 요청 URL을 가입·설정·탈퇴 화면에 연결했습니다. 동의 버전은 2026-10-20-privacy-v3이며 요청·사용량 90일 및 탈퇴 시 먼저 삭제하는 기준을 추가했습니다. 서버의 필수 버전과 함께 운영 반영해야 하며 현재 로컬 준비 상태입니다. 운영자의 거래 기록 5년·분쟁 기록 3년·관리자 접근 기록 별도 보존은 AI 입력 원문 보관을 뜻하지 않습니다. 서버 적용 순서는 D:/personalApp-admin/docs/privacy-retention.md에 있습니다. Supabase 운영 연결 재인증, 실제 로그·백업 설정 확인과 공개 시행일 확정은 남아 있습니다.')
    p=stage('app','google-play-info.md')
    s=p.read_text(encoding='utf-8').replace('[앱 전체 개인정보처리방침 HTTPS URL]', 'https://k-ternag.github.io/aiCalendar/privacy.html').replace('[웹에서 삭제를 요청할 수 있는 HTTPS URL]', 'https://k-ternag.github.io/aiCalendar/delete-account.html')
    p.write_text(s,encoding='utf-8')
    append('app','google-play-info.md','## 2026-10-20 개인정보 공개 URL 준비 상태',
           '위 개인정보처리방침·삭제 URL은 게시 예정 주소입니다. 홈페이지 문서·서버 보관 처리·앱 링크를 로컬에 반영했으며, 운영 적용·게시·실제 접속 검증 전에는 콘솔에 제출하지 않습니다. 자동 정리는 기본 비활성입니다. 앱 빌드와 단위 테스트 552개가 통과했으며 운영 회원의 동의 저장·삭제와 실기기는 미검증입니다.')
    p=ROOT/'README.md'
    s=p.read_text(encoding='utf-8')
    if '## 2026년 10월 20일 개인정보처리방침' not in s:
        s+='''

## 2026년 10월 20일 개인정보처리방침

`privacy.html`과 `delete-account.html`에 한·영 개인정보처리방침과 이메일 삭제 요청 안내를 추가했습니다. 홈페이지 하단과 기존 데이터 안내에서 연결하며 배포 `dist/`와 ZIP에도 포함합니다. 유나테크·greatryuhg@gmail.com을 운영자와 문의 창구로 사용합니다.

현재 문서는 **운영 반영 검토본**입니다. 서버·앱 로컬 변경과 검사 결과가 준비됐으며, Supabase 운영 연결 재인증, 실제 로그·백업·저장 리전 확인, 서버 적용과 공개 배포 후 시행일을 확정해야 합니다. 검토본을 운영 반영 완료 문서로 제출하지 않습니다.

예정 URL: `https://k-ternag.github.io/aiCalendar/privacy.html`, `https://k-ternag.github.io/aiCalendar/delete-account.html`.

인접 저장소 변경은 `scripts/stage_privacy_changes.py`의 해시 검사를 거쳐 적용합니다. 서버 정식 소스와 운영 안내는 `D:/personalApp-admin`에서 관리합니다. 운영 DB와 실제 회원 데이터는 이번 로컬 검사에서 변경하지 않았습니다.

추가 검사: `python scripts/privacy_browser_gate.py`, `node scripts/test_privacy_database.mjs`. DB 검사는 기존 로컬 PGlite 도구와 서버 저장소가 필요하며 운영 DB에 연결하지 않습니다. 한·영 원고의 기준은 `scripts/write_privacy_pages.py`입니다.
'''
        p.write_text(s,encoding='utf-8')

if __name__ == '__main__': main()
