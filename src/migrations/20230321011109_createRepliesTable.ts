/** @format */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('replies', (table) => {
		table.increments('id').notNullable();
		table.integer('user_id').unsigned().notNullable();
		table.integer('post_id').unsigned().notNullable();
		table.string('content').notNullable();
		table.timestamp('created_at').notNullable();
		table.timestamp('updated_at').notNullable();
		table.foreign('user_id').references('id').inTable('users');
		table.foreign('post_id').references('id').inTable('posts');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('replies');
}
