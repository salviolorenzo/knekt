/** @format */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('posts', (table) => {
		table.increments('id').notNullable();
		table.integer('userId').unsigned().notNullable();
		table.string('content').notNullable();
		table.timestamp('createdAt').notNullable();
		table.timestamp('updatedAt').notNullable();
		table.foreign('userId').references('id').inTable('users');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('posts');
}
