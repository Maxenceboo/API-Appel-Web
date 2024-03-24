import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('promo', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.increments('id').primary().unique();
		table.string('libetape').unique();
		table.integer('nb_etudiant');
	})
}


export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('promo');
};