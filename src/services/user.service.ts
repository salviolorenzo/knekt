/** @format */
import { UserDao } from '../dao/UserDao';
import { User, UserCreate, UserUpdate } from '../models/User';

const userDao = new UserDao();

export const getUsers = async (): Promise<User[]> => {
	const users = await userDao.getAllUsers();
	return users;
};

export const getUserById = async (id: string): Promise<User> => {
	const user = await userDao.getUserById(id);
	return user;
};

export const createUser = async (user: UserCreate): Promise<{ id: string }> => {
	const userId = await userDao.createUser(user);
	return { id: userId.toString() };
};

export const updateUser = async (userUpdate: UserUpdate): Promise<void> => {
	return await userDao.updateUser(userUpdate);
};

export const deleteUser = async (id: string): Promise<void> => {
	return await userDao.deleteUser(id);
};
