import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('sous_grp', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.bigInteger('id_sousgrp').unique().primary();
		table.string('nom');
		table.integer('nb_etudiant');
		// foreigh key
		table.string('libetape').references('libetape').inTable('promo');
	})
}

export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('sous_grp');
};