# Run in a regular PowerShell terminal to upload the reviewed website.
$ErrorActionPreference = 'Stop'
$siteRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$repositoryUrl = 'https://github.com/K-Ternag/aiCalendar.git'
Get-Command git -ErrorAction Stop | Out-Null

function Invoke-SiteGit {
    param([Parameter(Mandatory = $true)][string[]]$Arguments)
    & git -C $siteRoot @Arguments
    if ($LASTEXITCODE -ne 0) { throw "Git failed: $($Arguments[0]) (exit $LASTEXITCODE)." }
}

if (-not (Test-Path -LiteralPath (Join-Path $siteRoot '.git'))) {
    Invoke-SiteGit -Arguments @('init', '-b', 'main')
}
$actualRoot = Invoke-SiteGit -Arguments @('rev-parse', '--show-toplevel')
if ([IO.Path]::GetFullPath($actualRoot) -ne $siteRoot) {
    throw 'The repository root does not match this website folder.'
}
$branchName = Invoke-SiteGit -Arguments @('symbolic-ref', '--short', 'HEAD')
if ($branchName -ne 'main') { throw 'Switch to the main branch before running this script.' }

$originUrl = & git -C $siteRoot config --get remote.origin.url
if ($LASTEXITCODE -ne 0) {
    Invoke-SiteGit -Arguments @('remote', 'add', 'origin', $repositoryUrl)
} elseif ($originUrl -ne $repositoryUrl) {
    throw "The existing origin is different: $originUrl"
}

$authorName = & git -C $siteRoot config --get user.name
if ([string]::IsNullOrWhiteSpace($authorName)) {
    Invoke-SiteGit -Arguments @('config', 'user.name', 'K-Ternag')
}
$authorEmail = & git -C $siteRoot config --get user.email
if ([string]::IsNullOrWhiteSpace($authorEmail)) {
    Invoke-SiteGit -Arguments @('config', 'user.email', '10904273+K-Ternag@users.noreply.github.com')
}

# Preserve remote history; stop if a merge or an initial clone is necessary.
$remoteMain = Invoke-SiteGit -Arguments @('ls-remote', '--heads', 'origin', 'refs/heads/main')
if ($remoteMain) {
    & git -C $siteRoot rev-parse --verify --quiet HEAD | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw 'Remote main already has commits. Clone or reconcile it before uploading; no files were committed.'
    }
    Invoke-SiteGit -Arguments @('fetch', 'origin', 'main')
    & git -C $siteRoot merge-base --is-ancestor FETCH_HEAD HEAD
    if ($LASTEXITCODE -ne 0) {
        throw 'Remote main has changes that need to be merged. This script does not force-push.'
    }
}

$websiteFiles = @('index.html', 'guide.html', 'data.html', 'styles.css', 'app.js', '.nojekyll', '.gitignore', 'README.md', '신청서_영문소개.txt', 'assets', 'scripts', '.github')
Invoke-SiteGit -Arguments (@('add', '--') + $websiteFiles)
& git -C $siteRoot diff --cached --quiet
if ($LASTEXITCODE -eq 1) {
    Invoke-SiteGit -Arguments @('commit', '-m', 'Publish bilingual Kids Calendar introduction website')
} elseif ($LASTEXITCODE -ne 0) {
    throw 'Could not review staged changes.'
}
Invoke-SiteGit -Arguments @('push', '-u', 'origin', 'main')
Write-Output 'Uploaded: https://github.com/K-Ternag/aiCalendar/tree/main'
Write-Output 'For hosting, select Settings > Pages > Source > GitHub Actions.'
