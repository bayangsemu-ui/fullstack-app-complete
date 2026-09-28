#!/bin/bash

echo "🔧 Setting up Database..."

# Check if database credentials are set
if [ -z "$DB_HOST" ] || [ -z "$DB_USER" ] || [ -z "$DB_PASSWORD" ] || [ -z "$DB_NAME" ]; then
    echo "Loading .env file..."
    source server/.env
fi

echo "Database Config:"
echo "Host: $DB_HOST"
echo "User: $DB_USER"
echo "Database: $DB_NAME"
echo ""

# Create database
echo "Creating database..."
psql -h $DB_HOST -U $DB_USER -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1 || psql -h $DB_HOST -U $DB_USER -c "CREATE DATABASE $DB_NAME"

echo "✅ Database setup completed!"
