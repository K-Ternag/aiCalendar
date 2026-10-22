"""Prepare adjacent-repository changes without writing outside this workspace."""
from pathlib import Path
from stage_privacy_changes import stage, STAGE, REPOS

BASE = 'android/app/src/main/java/com/personalapp/quietcalendar/'

def replace(repo, name, old, new):
    path = stage(repo, name)
    text = path.read_text(encoding='utf-8')
    if new in text:
        return
    if old not in text:
        raise RuntimeError(f'Anchor not found: {name}: {old[:70]}')
    path.write_text(text.replace(old,new,1),encoding='utf-8')

def write(repo, name, content):
    path = stage(repo, name)
    path.write_text(content, encoding='utf-8')

def main():
    # Register files already authored inside the review package.
    for root in ('supabase/migrations','supabase/functions/account_lifecycle'):
        for path in (STAGE/'admin'/root).rglob('*'):
            if path.is_file(): stage('admin',path.relative_to(STAGE/'admin').as_posix())
    stage('admin','supabase/functions/_shared/lifecycle.ts')
    stage('admin','supabase/tests/privacy_retention.sql')
    replace('admin','src/server.mjs','    return response.json();', '''    const value = await response.json();
    if (['admin_list_users', 'admin_get_user', 'admin_user_audit'].includes(name)) {
      const subjects = name === 'admin_list_users' ? (value.rows || []).map(row => row.user_id).filter(validUuid) : [args.target_user];
      // Fail closed: do not deliver member data if the access audit cannot be written.
      await rpc('record_admin_access', { action: name, subject_ids: subjects });
    }
    return value;''')
    replace('admin','supabase/tests/ai_privacy.sql','v text:=\'2026-10-11-privacy-v2\'',
            'v text:=\'2026-10-20-privacy-v3\'')
    replace('admin','supabase/config.toml','[functions.delete_account]',
            '[functions.account_lifecycle]\nverify_jwt = false\n[functions.delete_account]')

    # Preserve the billing function's authorization/receipt ownership contract.
    source=(REPOS['admin']/'supabase/migrations/20261011060358_billing_account.sql').read_text(encoding='utf-8')
    function=source.split('create function public.apply_verified_purchase(',1)[1].split('create function public.release_purchase_verification',1)[0]
    function='create or replace function public.apply_verified_purchase('+function
    function=function.replace('auto_renew,last_verified_at,verification_generation)', 'auto_renew,last_verified_at,verification_generation,provider_order_id)')
    function=function.replace('::boolean,now(),generation)', "::boolean,now(),generation,nullif(payload->>'provider_order_id',''))")
    function=function.replace('verification_generation=excluded.verification_generation', 'verification_generation=excluded.verification_generation,provider_order_id=excluded.provider_order_id')
    migration=next((STAGE/'admin/supabase/migrations').glob('*_privacy_retention.sql'))
    sql=migration.read_text(encoding='utf-8')
    marker='-- Verified provider order identifier, never raw purchase tokens in the archive.\n'
    if marker not in sql:
        sql += '\n'+marker+function
        migration.write_text(sql,encoding='utf-8')
    replace('admin','supabase/functions/_shared/play.ts',
            'lineItems: Array<{ productId: string; expiryTime: string;',
            'lineItems: Array<{ productId: string; expiryTime: string; latestSuccessfulOrderId?: string;')
    replace('admin','supabase/functions/_shared/play.ts',
            'provider_status: purchase.subscriptionState, entitlement_ends_at: item.expiryTime,',
            'provider_order_id: item.latestSuccessfulOrderId ?? null,\n      provider_status: purchase.subscriptionState, entitlement_ends_at: item.expiryTime,')

    write('app',BASE+'PrivacyPolicyLink.kt','''package com.personalapp.quietcalendar

import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.platform.testTag

internal object PublicPrivacyPolicy {
    const val URL = "https://k-ternag.github.io/aiCalendar/privacy.html"
    const val DELETION_URL = "https://k-ternag.github.io/aiCalendar/delete-account.html"
}

@Composable
internal fun PrivacyPolicyLink() {
    val uri = LocalUriHandler.current
    TextButton(onClick = { runCatching { uri.openUri(PublicPrivacyPolicy.URL) } },
        modifier = Modifier.testTag("privacy_policy_link")) { Text("개인정보처리방침") }
}
''')
    replace('app',BASE+'MemberLoginScreen.kt',
            'Text("가입 후 사용 가이드가 이어져요.",',
            'PrivacyPolicyLink()\n                    Text("가입 후 사용 가이드가 이어져요.",')
    replace('app',BASE+'AiPrivacyPolicy.kt','2026-10-11-privacy-v2','2026-10-20-privacy-v3')
    replace('app',BASE+'AiTransferNotices.kt',
            '동의 이력·사용량과 사용자가 저장한 일정은 회원 서비스의 별도 기록입니다.',
            '동의 이력은 회원 유지 중 보관하고 탈퇴 시 삭제합니다. 요청·사용량 기록은 90일 이내 보관하되 탈퇴 시 먼저 삭제합니다. 사용자가 저장한 일정은 별도 기록입니다. 전체 개인정보처리방침: https://k-ternag.github.io/aiCalendar/privacy.html')
    replace('app',BASE+'AiPrivacyUi.kt',
            'Text("OpenAI의 응답 저장을 끄고 요청합니다.',
            'PrivacyPolicyLink()\n        Text("서비스 AI 동의 이력은 탈퇴 시 삭제하며 요청·사용량 기록은 최대 90일 보관하고 탈퇴 시 먼저 삭제합니다.")\n        Text("OpenAI의 응답 저장을 끄고 요청합니다.')
    replace('app',BASE+'SettingsScreen.kt',
            '// Leave enough scroll range to place the highlighted row below the toolbar.',
            'item { PrivacyPolicyLink() }\n                // Leave enough scroll range to place the highlighted row below the toolbar.')
    replace('app',BASE+'CloudScreens.kt',
            '개인 캘린더와 회원 정보가 삭제됩니다. 공유 캘린더는 먼저 소유권을 이전해 주세요.',
            '회원 정보와 개인 일정은 삭제됩니다. 공유 일정은 소유권을 이전한 캘린더나 다른 회원의 캘린더에 남으며 작성자 계정 연결을 제거합니다. 본문 속 개인정보 삭제는 별도로 요청해 주세요.')
    replace('app',BASE+'CloudScreens.kt',
            '소유권을 이전하지 않은 공유 캘린더를 폐쇄합니다. 다른 회원도 해당 서버 일정을 이용할 수 없게 됩니다.',
            '소유권을 이전하지 않은 공유 캘린더와 서버 일정을 삭제합니다. 다른 회원도 해당 일정을 이용할 수 없습니다.')
    replace('app',BASE+'CloudScreens.kt',
            'SettingsNotice("Google Play 구독은 자동 취소되지 않아요.',
            'PrivacyPolicyLink()\n            SettingsNotice("Google Play 구독은 자동 취소되지 않아요.')

    write('app',BASE+'AccountLifecyclePolicy.kt','''package com.personalapp.quietcalendar

import com.google.gson.JsonObject

/** A network/auth failure is never evidence that local data should be erased. */
internal object AccountLifecyclePolicy {
    fun confirmsDeletion(expected: String, current: String?, proof: JsonObject?): Boolean =
        current == expected && proof?.get("user_id")?.asString == expected &&
            proof.get("state")?.asString == "deleted"
}
''')
    name=BASE+'CloudAccount.kt'
    replace('app',name,'private suspend fun token(): Pair<String, String> = mutex.withLock {',
            '''private suspend fun token(): Pair<String, String> {
        val expectedOwner = AccountDataScope.current(context)
        var previousAccess: String? = null
        try { return mutex.withLock {''')
    replace('app',name,'val expected = AccountDataScope.current(context) ?: throw CloudFailure("AUTH_REQUIRED")\n        if (session.get("expires_at")',
            'val expected = AccountDataScope.current(context) ?: throw CloudFailure("AUTH_REQUIRED")\n        if (expected != expectedOwner) throw CloudFailure("ACCOUNT_CHANGED")\n        previousAccess = session.get("access_token").asString\n        if (session.get("expires_at")')
    replace('app',name,'''        expected to session.get("access_token").asString
    }
    suspend fun rpc''', '''        expected to session.get("access_token").asString
        } } catch (failure: Exception) {
            // This endpoint verifies the original token signature, issuer, role,
            // audience and subject even if deletion has revoked refresh tokens.
            val proof = if (expectedOwner != null && previousAccess != null &&
                AccountDataScope.current(context) == expectedOwner) runCatching {
                withContext(Dispatchers.IO) {
                    request("/functions/v1/account_lifecycle", "POST", JsonObject(), previousAccess).asJsonObject
                }
            }.getOrNull() else null
            if (expectedOwner != null && AccountLifecyclePolicy.confirmsDeletion(expectedOwner,
                    AccountDataScope.current(context), proof)) {
                completeDeletion(expectedOwner)
                throw CloudFailure("ACCOUNT_DELETED")
            }
            throw failure
        }
    }
    private suspend fun ensureAccountActive(owner: String, access: String, allowDeleting: Boolean = false) {
        val proof = request("/rest/v1/rpc/get_account_lifecycle", "POST", JsonObject(), access).asJsonObject
        if (AccountLifecyclePolicy.confirmsDeletion(owner, AccountDataScope.current(context), proof)) {
            completeDeletion(owner)
            throw CloudFailure("ACCOUNT_DELETED")
        }
        if (proof.get("state")?.asString == "deleting" && !allowDeleting)
            throw CloudFailure("ACCOUNT_DELETION_RETRY_REQUIRED")
    }
    suspend fun rpc''')
    replace('app',name,'val result = request("/rest/v1/rpc/$name", "POST", payload, access)',
            'if (name != "get_account_lifecycle") ensureAccountActive(owner, access)\n        val result = request("/rest/v1/rpc/$name", "POST", payload, access)')
    replace('app',name,'val (owner, access) = token(); val result = request("/rest/v1/$name?select=*", "GET", token = access)',
            'val (owner, access) = token(); ensureAccountActive(owner, access)\n        val result = request("/rest/v1/$name?select=*", "GET", token = access)')
    replace('app',name,'val result = request("/functions/v1/$name", "POST", payload, access)',
            'ensureAccountActive(owner, access, allowDeleting = name == "delete_account")\n        val result = request("/functions/v1/$name", "POST", payload, access)')
    replace('app',name,'''        logout()
        val app = context.applicationContext as QuietCalendarApp
        app.registrationAi.erase(owner)''','''        // Auth is already deleted: clear locally without refreshing revoked tokens.
        mutex.withLock {
            if (AccountDataScope.current(context) != owner) throw CloudFailure("ACCOUNT_CHANGED")
            suspendOldScope()
            write("session", null); write("pkce", null); write("pending_invite", null)
            AccountDataScope.select(context, null); mutable.value = CloudAccountState()
        }
        val app = context.applicationContext as QuietCalendarApp
        app.registrationAi.erase(owner)''')
    replace('app',name,'write("profile_$owner", null)\n        app.forgetRepository(owner)',
            'write("profile_$owner", null)\n        write("ai_privacy_blocked_$owner", null)\n        app.forgetRepository(owner)')
    replace('app',name,'"AUTH_REQUIRED" -> "회원 로그인이 필요해요."',
            '''"AUTH_REQUIRED" -> "회원 로그인이 필요해요."
        "ACCOUNT_DELETED" -> "탈퇴가 확인되어 이 기기의 회원 자료를 정리했어요."
        "ACCOUNT_DELETION_RETRY_REQUIRED" -> "탈퇴 처리 중이에요. 회원·구독에서 탈퇴를 다시 시도해 주세요."
        "PENDING_AI_REQUESTS" -> "진행 중인 AI 분석이 끝난 뒤 탈퇴를 다시 시도해 주세요."''')

    write('app','android/app/src/test/java/com/personalapp/quietcalendar/AccountLifecyclePolicyTest.kt','''package com.personalapp.quietcalendar

import com.google.gson.JsonObject
import org.junit.Assert.*
import org.junit.Test

class AccountLifecyclePolicyTest {
    private fun proof(owner: String, state: String) = JsonObject().apply {
        addProperty("user_id", owner); addProperty("state", state)
    }
    @Test fun onlyMatchingVerifiedDeletedStateErases() {
        assertTrue(AccountLifecyclePolicy.confirmsDeletion("a", "a", proof("a", "deleted")))
        assertFalse(AccountLifecyclePolicy.confirmsDeletion("a", "a", null))
        assertFalse(AccountLifecyclePolicy.confirmsDeletion("a", "b", proof("a", "deleted")))
        assertFalse(AccountLifecyclePolicy.confirmsDeletion("a", "a", proof("b", "deleted")))
        for (state in listOf("active", "deleting", "uninitialized"))
            assertFalse(AccountLifecyclePolicy.confirmsDeletion("a", "a", proof("a", state)))
    }
}
''')

if __name__ == '__main__':
    main()
