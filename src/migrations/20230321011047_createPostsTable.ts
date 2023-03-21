/** @format */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('posts', (table) => {
		table.increments('id').notNullable();
		table.integer('user_id').unsigned().notNullable();
		table.string('content').notNullable();
		table.timestamp('created_at').notNullable();
		table.timestamp('updated_at').notNullable();
		table.foreign('user_id').references('id').inTable('users');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('posts');
}
