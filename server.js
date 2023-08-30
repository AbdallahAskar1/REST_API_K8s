import { createServer } from 'http';
import app from './app.js';
const PORT = process.env.PORT || 3000;
const server= createServer(app)
import mysql from 'mysql2/promise';


// Database configuration
const dbConfig = {
  host: '0.0.0.0',
  user: 'root',
  password: '12345678',
  database: 'mydb',
  port:'3306'
};


const pool = mysql.createPool(dbConfig);


const waitForDatabase = async () => {
  while (true) {
    try {
      await pool.query('SELECT 1'); 
      console.log('Database connected');
      break; 
    } catch (error) {
      console.log(error)
      console.log('Waiting for database...');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

const startServer = async () => {
  await waitForDatabase(); 
 
  server.listen(PORT, () => {
    console.log(`#server is running on port ${PORT}`);
  });
};

startServer();



