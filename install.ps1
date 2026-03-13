$ErrorActionPreference = "Stop"

function Test-Command {
    param([string]$Name)
    return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

# Check npm
if (-not (Test-Command "npm")) {
    Write-Host "❌ npm not found. Please install Node.js first."
    exit 1
}

Write-Host "✅ npm detected"

# Root directory
$rootDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendDir = Join-Path $rootDir "backend"
$envFile = Join-Path $backendDir ".env"

# Check backend folder
if (!(Test-Path $backendDir)) {
    Write-Host "❌ backend folder not found."
    exit 1
}

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

# Create .env content
$envContent = @"
DB_HOST=$dbHost
DB_USER=$dbUser
DB_PASSWORD=$dbPassword
DB_NAME=$dbName
PORT=$port
"@

# Write env file
if (Test-Path $envFile) {
    $overwrite = Read-Host "⚠ backend/.env exists. Overwrite? (y/N)"
    if ($overwrite -match "^[Yy]$") {
        $envContent | Set-Content $envFile -Encoding ascii
        Write-Host "✅ .env updated"
    } else {
        Write-Host "Keeping existing .env"
    }
} else {
    $envContent | Set-Content $envFile -Encoding ascii
    Write-Host "✅ .env created"
}

Write-Host ""
Write-Host "Installing backend dependencies..."

Set-Location $backendDir
npm install

Set-Location $rootDir

Write-Host ""
Write-Host "✅ Installation completed!"
Write-Host ""
Write-Host "Start server with:"
Write-Host "node backend/server.js"