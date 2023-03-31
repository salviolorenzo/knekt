/** @format */
import { Knex } from 'knex';
import { db } from '../config/db';
import { CreatePostBody, Post, UpdatePostBody } from '../models/Post';

export class PostDao {
	TABLE_NAME = 'posts';
	table: Knex.QueryBuilder;

	constructor() {
		this.table = db(this.TABLE_NAME);
	}
	async getPostsByUser(userId: string): Promise<Post[]> {
		return this.table.where({ userId }).select();
	}

	async getRepliesByPost(postId: string) {
		return await this.table.where({ repliesToPostId: postId }).select();
	}

	async getPostById(postId: string): Promise<Post | undefined> {
		return await this.table.where({ id: postId }).select().first();
	}

	async createPost(createPostBody: CreatePostBody): Promise<number> {
		return await this.table
			.insert({
				...createPostBody,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			})
			.returning('id');
	}

	async updatePostContent(updatePostBody: UpdatePostBody): Promise<void> {
		return await this.table
			.where({ id: updatePostBody.id })
			.update({ content: updatePostBody.content, updatedAt: Date.now() });
	}

	async deletePost(id: string): Promise<void> {
		return await this.table.where({ id }).delete();
	}
}
