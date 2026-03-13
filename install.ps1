Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
$ErrorActionPreference = "Stop"

function Test-Command {
    param([string]$Name)
    return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

# Check git
if (-not (Test-Command "git")) {
    Write-Host "❌ Git not found. Install Git first."
    exit 1
}

# Check npm
if (-not (Test-Command "npm")) {
    Write-Host "❌ npm not found. Install Node.js first."
    exit 1
}

Write-Host "✅ npm detected"
Write-Host "✅ git detected"

# Install directory
$installDir = Join-Path $HOME "quiz-web"

if (!(Test-Path $installDir)) {
    Write-Host "Cloning repository..."
    git clone https://github.com/lakshminsjaanu-blip/quiz-web.git $installDir
}

Set-Location $installDir

$backendDir = Join-Path $installDir "backend"
$envFile = Join-Path $backendDir ".env"

Write-Host ""
Write-Host "Configure MySQL connection (Press Enter for default values)"

$dbHost = Read-Host "MySQL host [127.0.0.1]"
if ([string]::IsNullOrWhiteSpace($dbHost)) { $dbHost = "127.0.0.1" }

$dbUser = Read-Host "MySQL username [root]"
if ([string]::IsNullOrWhiteSpace($dbUser)) { $dbUser = "root" }

$dbPasswordSecure = Read-Host "MySQL password (hidden)" -AsSecureString
$dbPassword = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($dbPasswordSecure)
)

$dbName = Read-Host "Database name [quiz_system]"
if ([string]::IsNullOrWhiteSpace($dbName)) { $dbName = "quiz_system" }

$port = Read-Host "Backend port [5000]"
if ([string]::IsNullOrWhiteSpace($port)) { $port = "5000" }

$envContent = @"
DB_HOST=$dbHost
DB_USER=$dbUser
DB_PASSWORD=$dbPassword
DB_NAME=$dbName
PORT=$port
"@

$envContent | Set-Content $envFile -Encoding ascii

Write-Host "✅ .env created"

Write-Host ""
Write-Host "Installing backend dependencies..."

Set-Location $backendDir
npm install

Set-Location $installDir

Write-Host ""
Write-Host "✅ Installation completed!"
Write-Host ""
Write-Host "Run server with:"
Write-Host "node backend/server.js"