import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('lien_etudiant_sous_grp', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		// foreigh key
		table.bigInteger('code_etudiant').references('code_etudiant').inTable('etudiant');
		table.bigInteger('id_sousgrp').references('id_sousgrp').inTable('sous_grp');
		// primary key
		table.primary(['code_etudiant','id_sousgrp']);
	})
}

export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('lien_etudiant_sous_grp');
};
