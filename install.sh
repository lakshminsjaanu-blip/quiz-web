#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$ROOT_DIR/backend/.env"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but was not found. Please install Node.js (which includes npm) and try again."
  exit 1
fi

echo "Configure MySQL connection (press Enter to use defaults)."
read -r -p "MySQL host [127.0.0.1]: " DB_HOST
DB_HOST="${DB_HOST:-127.0.0.1}"
read -r -p "MySQL username [root]: " DB_USER
DB_USER="${DB_USER:-root}"
read -r -s -p "MySQL password (hidden): " DB_PASSWORD
echo
read -r -p "Database name [quiz_system]: " DB_NAME
DB_NAME="${DB_NAME:-quiz_system}"
read -r -p "Backend port [5000]: " PORT
PORT="${PORT:-5000}"

if [ -f "$ENV_FILE" ]; then
  read -r -p "Existing backend/.env found. Overwrite? [y/N]: " OVERWRITE_ENV
  OVERWRITE_ENV="${OVERWRITE_ENV:-N}"
  if [[ ! "$OVERWRITE_ENV" =~ ^[Yy]$ ]]; then
    echo "Keeping existing backend/.env"
  else
    cat > "$ENV_FILE" <<EOF
DB_HOST=$DB_HOST
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASSWORD
DB_NAME=$DB_NAME
PORT=$PORT
EOF
  fi
else
  cat > "$ENV_FILE" <<EOF
DB_HOST=$DB_HOST
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASSWORD
DB_NAME=$DB_NAME
PORT=$PORT
EOF
fi

echo "Installing backend dependencies..."
cd "$ROOT_DIR/backend"
npm install

echo "Done. You can start the server with: node backend/server.js"
