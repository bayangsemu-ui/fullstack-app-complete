# React Frontend

Modern React frontend application untuk Full-Stack.

## 📋 Features

- ✅ React 18 dengan Vite
- ✅ React Router untuk navigation
- ✅ Zustand untuk state management
- ✅ Tailwind CSS untuk styling
- ✅ Axios untuk API requests
- ✅ JWT Authentication
- ✅ Responsive Design
- ✅ Modern UI Components

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

Application akan berjalan di `http://localhost:3000`

## 📁 Project Structure

```
client/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   ├── store/          # Zustand stores
│   ├── services/       # API services
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies
```

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📦 Key Dependencies

- **react** - UI library
- **react-router-dom** - Routing
- **axios** - HTTP client
- **zustand** - State management
- **tailwindcss** - Utility-first CSS
- **vite** - Build tool

## 🎨 Pages

- **Login** - User authentication
- **Register** - New user registration
- **Dashboard** - Main dashboard
- **Users** - User management
- **Data** - Data management (CRUD)

## 🔐 Authentication

- JWT token stored in localStorage
- Automatic token refresh on requests
- Automatic logout on token expiration
- Protected routes

## 📡 API Integration

Frontend automatically communicates with backend API at `http://localhost:5000/api`

## 🚀 Production Build

```bash
npm run build
```

Output akan di folder `dist/`
