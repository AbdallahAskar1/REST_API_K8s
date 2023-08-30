import { pool } from './db.js';

export const UserModel = {
  async getUsers() {
    try {
      const [rows] = await pool.query('SELECT * FROM user ORDER BY ID');
    //   console.log('Query Result:', rows,fields); 
      return rows;
    } catch (err) {
      console.error('Query Error:', err);
      throw err;
    }
  },

  async getUserById(id) {
    try {
      const [data] = await pool.query('SELECT * FROM user WHERE id=?', [id]);
      return data.length > 0 ? data : null;
    } catch (err) {
      throw err;
    }
  },

  async createUser(name, email) {
    try {
      await pool.query('INSERT INTO user (name,email) VALUES (?,?)', [name, email]);
    } catch (err) {
      throw err;
    }
  },

  async updateUser(id, name, email) {
    try {
      await pool.query('UPDATE user SET name=?,email=? WHERE id=?', [name, email, id]);
    } catch (err) {
      throw err;
    }
  },

  async deleteUser(id) {
    try {
      await pool.query('DELETE FROM user WHERE id=?', [id]);
    } catch (err) {
      throw err;
    }
  },
};
