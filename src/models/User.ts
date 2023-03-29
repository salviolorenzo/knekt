/** @format */

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	email: string;
	password: string;
	createdAt: number;
	updatedAt: number;
}

export interface UserCreate {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
	password: string;
}

export interface UserUpdate {
	id: number;
	body: {
		firstName?: string;
		lastName?: string;
		age?: number;
		email?: string;
		password?: string;
	};
}

export interface UserDelete {
	id: number;
}
