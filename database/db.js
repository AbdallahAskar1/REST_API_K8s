import { createPool } from "mysql2/promise";
const dbConfig = {
  host: 'mysql',    
  user: 'api_user',
  database: 'mydb',
  port:3306
};

export const pool = createPool(dbConfig);

