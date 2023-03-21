/** @format */
import { UserDao } from '../dao/UserDao';
import { User } from '../models/User';

const userDao = new UserDao();

export const getUsers = async () => {
	const users = await userDao.getAllUsers();
	return users;
};

export const getUserById = async (id: string): Promise<User> => {
	const user = await userDao.getUserById(id);
	return user;
};
