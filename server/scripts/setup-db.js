const pool = require('../src/config/database');
const fs = require('fs');
const path = require('path');

const initializeDatabase = async () => {
  try {
    console.log('🔧 Initializing database...');
    
    const sqlFile = fs.readFileSync(
      path.join(__dirname, 'init-db.sql'),
      'utf-8'
    );

    const statements = sqlFile.split(';').filter(stmt => stmt.trim());

    for (const statement of statements) {
      await pool.query(statement);
    }

    console.log('✅ Database initialized successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
};

initializeDatabase();
