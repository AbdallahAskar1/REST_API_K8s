import { createServer } from 'http';
import app from './app.js';
const PORT = process.env.PORT || 3000;
const server= createServer(app)

import swaggerUi from 'swagger-ui-express';
// const swaggerFile = await import('./swagger-output.json');
import swaggerFile from './swagger-output.json' assert { type: 'json' };

import { pool } from './database/db.js';


const waitForDatabase = async () => {
  while (true) {
    try {
      await pool.query('SELECT 1'); 
      console.log('Database connected');
      break; 
    } catch (error) {
      console.log(error)
      console.log('Waiting for database...');
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
};

const startServer = async () => {
  await waitForDatabase(); 
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  server.listen(PORT, () => {
    console.log(`#server is running on port ${PORT}`);
  });
};

startServer();



