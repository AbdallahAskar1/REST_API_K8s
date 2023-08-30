import { createPool } from "mysql2/promise";
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'mydb',
    port:'3306'
  };
  
  
  export const pool = createPool(dbConfig);