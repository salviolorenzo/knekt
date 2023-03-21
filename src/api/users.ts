/** @format */

import * as express from 'express';
import { getUsers, getUserById } from '../services/user.service';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
	const users = await getUsers();
	res.send(users);
});

userRouter.get('/:id', async (req, res) => {
	const user = await getUserById(req.params.id);
	res.send(user);
});

export default userRouter;
