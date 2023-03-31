/** @format */

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.withSchema('knekt').createTable('users', (table) => {
		table.increments('id').notNullable();
		table.string('firstName').notNullable();
		table.string('lastName').notNullable();
		table.string('email').notNullable();
		table.integer('age').notNullable();
		table.string('password').notNullable();
		table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
		table.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('users');
}
