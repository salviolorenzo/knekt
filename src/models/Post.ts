/** @format */

export interface Post {
	id: number;
	userId: number;
	content: string;
	createdAt: number;
	updatedAt: number;
}

export interface CreatePostBody {
	userId: number;
	content: string;
}

export interface UpdatePostBody {
	id: number;
	content: string;
}
