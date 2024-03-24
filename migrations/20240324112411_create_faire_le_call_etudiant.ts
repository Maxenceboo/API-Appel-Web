import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('faire_le_call_etudiant', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		// foreigh key
		table.bigInteger('code_etudiant').references('code_etudiant').inTable('etudiant');
		table.bigInteger('id_call').references('id_call').inTable('un_call');
		// primary key
		table.primary(['code_etudiant','id_call']);
	})
}

export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('faire_le_call_etudiant');
};
