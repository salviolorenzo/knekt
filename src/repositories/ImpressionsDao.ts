/** @format */

import { Knex } from 'knex';
import { Post } from '../models/Post';
import { db } from '../config/db';

export class ImpressionsDao {
	table: Knex.QueryBuilder<any, any>;

	constructor(tableName: string) {
		this.table = db(tableName);
	}

	async getPostImpressionsByUser(userId: string): Promise<Post[]> {
		return await this.table.where({ userId }).select();
	}

	async getImpressionCountByPost(postId: string): Promise<number> {
		return await this.table.where({ postId }).select().count();
	}

	async createImpression(postId: string, userId: string): Promise<void> {
		this.table.insert({ postId, userId });
	}

	async deleteImpression(postId: string, userId: string): Promise<void> {
		this.table.where({ postId, userId }).delete();
		return;
	}
}
