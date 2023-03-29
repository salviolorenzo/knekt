/** @format */

export interface Reply {
	id: number;
	userId: number;
	postId: number;
	content: string;
	createdAt: number;
	updatedAt: number;
}

export interface CreateReplyBody {
	userId: number;
	content: string;
}

export interface UpdateReplyBody {
	id: number;
	content: string;
}
