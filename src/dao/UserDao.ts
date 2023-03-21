/** @format */

import { db } from '../config/db';
import { User } from '../models/User';

export class UserDao {
	async getAllUsers() {
		return await db
			.column('first_name', 'last_name', 'age')
			.select()
			.from<User>('users');
	}

	async getUserById(id: string): Promise<User> {
		return await db
			.from('users')
			.column('first_name', 'last_name', 'age')
			.select()
			.where('id', id)
			.first();
	}
}
