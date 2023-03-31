/** @format */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('posts', (table) => {
		table.increments('id').notNullable();
		table.integer('userId').unsigned().notNullable();
		table.integer('repliesToPostId').unsigned().nullable();
		table.string('content').notNullable();
		table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
		table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
		table.foreign('userId').references('id').inTable('users');
		table.foreign('repliesToPostId').references('id').inTable('posts');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('posts');
}
