/** @format */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.withSchema('knekt').createTable('dislikes', (table) => {
		table.increments('id').notNullable();
		table.integer('userId').unsigned().notNullable();
		table.integer('postId').unsigned().notNullable();
		table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
		table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
		table.foreign('userId').references('id').inTable('users');
		table.foreign('postId').references('id').inTable('posts');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('dislikes');
}
