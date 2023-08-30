import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from './users.controller.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);

userRouter.post('/', createUser);

userRouter.put('/:id', updateUser);

userRouter.delete('/:id', deleteUser);

export default userRouter;
