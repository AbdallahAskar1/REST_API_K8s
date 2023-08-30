import { UserModel } from '../../database/user.model.js';
import { validationResult } from 'express-validator'

export const getUsers = async (req, res) => {
  
  
  try {
    const data = await UserModel.getUsers();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export const getUserById = async (req, res) => {
  try {
    const data = await UserModel.getUserById(req.params.id);
    console.log(req.params.id)
    if (data) {
        res.status(200).json(data[0]);
      } else {
        res.status(200).json({message:'User Not Found'});
      }

} catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  const { name, email } = req.body;
  
  try {
    await UserModel.createUser(name, email);
    res.status(201).send('User Added successfully');
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  try {
    await UserModel.updateUser(id, name, email);
    res.status(200).send(`User updated with id=${id}`);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};

export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await UserModel.deleteUser(id);
    res.status(200).send(`User deleted with id=${id}`);
  } catch (err) {
    res.status(500).json({ error: `${err}` });
  }
};
