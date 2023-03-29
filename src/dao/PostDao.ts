/** @format */
import { db } from '../config/db';
import { CreatePostBody, Post, UpdatePostBody } from '../models/Post';

export class PostDao {
	TABLE_NAME = 'posts';

	async getPostsByUser(userId: string): Promise<Post[]> {
		return db(this.TABLE_NAME).where({ userId }).select();
	}

	async getPostById(postId: string): Promise<Post | undefined> {
		return await db(this.TABLE_NAME).where({ id: postId }).select().first();
	}

	async createPost(createPostBody: CreatePostBody): Promise<number> {
		return await db(this.TABLE_NAME)
			.insert({
				...createPostBody,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			})
			.returning('id');
	}

	async updatePostContent(updatePostBody: UpdatePostBody): Promise<void> {
		return await db(this.TABLE_NAME)
			.where({ id: updatePostBody.id })
			.update({ content: updatePostBody.content, updatedAt: Date.now() });
	}

	async deletePost(id: string): Promise<void> {
		return await db(this.TABLE_NAME).where({ id }).delete();
	}
}
