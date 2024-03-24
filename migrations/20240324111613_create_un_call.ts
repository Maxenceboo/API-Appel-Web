import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('un_call', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.bigInteger('id_call').primary().unique();
		table.dateTime('date_heure');
		table.boolean('abs?');
		// foreigh key
		table.bigInteger('id_user').references('id_user').inTable('user');
		table.bigInteger('id_ue').references('id_ue').inTable('ue');
		table.bigInteger('id_sousgrp').references('id_sousgrp').inTable('sous_grp');
		table.bigInteger('code_etudiant').references('code_etudiant').inTable('etudiant');    
	})
}



export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('un_call');
};


