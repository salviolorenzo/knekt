/** @format */
import { db } from '../config/db';
import { CreateReplyBody, UpdateReplyBody } from '../models/Reply';

export class ReplyDao {
	TABLE_NAME = 'replies';
	table = db(this.TABLE_NAME);
	async getRepliesByUser(userId: string) {
		return await this.table.where({ userId }).select();
	}

	async getRepliesByPost(postId: string) {
		return await this.table.where({ postId }).select();
	}

	async getReplyById(id: string) {
		return await this.table.where({ id }).select().first();
	}

	async createReply(createReplyBody: CreateReplyBody): Promise<number> {
		return await db(this.TABLE_NAME)
			.insert({
				...createReplyBody,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			})
			.returning('id');
	}

	async updateReplyContent(updateReplyBody: UpdateReplyBody) {
		return await this.table.where({ id: updateReplyBody.id }).update({
			content: updateReplyBody.content,
			updatedAt: Date.now(),
		});
	}

	async deleteReply(id: string): Promise<void> {
		return await this.table.where({ id }).delete();
	}
}
