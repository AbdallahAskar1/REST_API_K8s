import { createServer } from 'http';
import app from './app.js';
const PORT = process.env.PORT || 3000;
const server= createServer(app)


import { pool } from './database/db.js';


const waitForDatabase = async () => {
  while (true) {
    try {
      await pool.query('SELECT * from user'); 
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



