# Server - Express.js API

Backend API untuk Full-Stack Application.

## 📋 Features

- ✅ Express.js Server
- ✅ PostgreSQL Database
- ✅ JWT Authentication
- ✅ User Management (Register, Login, CRUD)
- ✅ Data Management API
- ✅ Error Handling
- ✅ CORS Support
- ✅ Security (Helmet, bcryptjs)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env
```

### 3. Initialize Database
```bash
npm run setup-db
```

### 4. Run Development Server
```bash
npm run dev
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user (Protected)
- `DELETE /api/users/:id` - Delete user (Protected)

### Data
- `GET /api/data` - Get all data
- `POST /api/data` - Create data (Protected)
- `PUT /api/data/:id` - Update data (Protected)
- `DELETE /api/data/:id` - Delete data (Protected)

### System
- `GET /health` - Health check
- `GET /api/status` - API status

## 🔐 Authentication

Use JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## 📊 Database Schema

### Users Table
- `id` (SERIAL PRIMARY KEY)
- `email` (VARCHAR UNIQUE)
- `password` (VARCHAR)
- `name` (VARCHAR)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Data Table
- `id` (SERIAL PRIMARY KEY)
- `title` (VARCHAR)
- `description` (TEXT)
- `user_id` (FK to users)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## 🛠️ Development

```bash
# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## 📦 Dependencies

- express - Web framework
- pg - PostgreSQL client
- jsonwebtoken - JWT auth
- bcryptjs - Password hashing
- cors - CORS middleware
- helmet - Security headers
- morgan - Request logging
