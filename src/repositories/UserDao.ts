/** @format */

import { Knex } from 'knex';
import { db } from '../config/db';
import { User, UserCreate, UserUpdate } from '../models/User';

export class UserDao {
	TABLE_NAME = 'users';
	table: Knex.QueryBuilder;

	constructor() {
		this.table = db(this.TABLE_NAME);
	}

	async getAllUsers(): Promise<User[]> {
		return await db(this.TABLE_NAME).select().from<User>('users');
	}

	async getUserById(id: string): Promise<User> {
		return await db(this.TABLE_NAME).select().where('id', id).first();
	}

	async createUser(user: UserCreate): Promise<number> {
		return await db(this.TABLE_NAME)
			.insert({ ...user, createdAt: Date.now(), updatedAt: Date.now() })
			.into('users')
			.returning('id');
	}

	async updateUser(userUpdate: UserUpdate): Promise<void> {
		return await db(this.TABLE_NAME)
			.where({ id: userUpdate.id })
			.update({ ...userUpdate.body, updatedAt: Date.now() });
	}

	async deleteUser(id: string): Promise<void> {
		return await db(this.TABLE_NAME).where({ id }).delete().from('users');
	}
}
