import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('ue', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.bigInteger('id_ue').primary().unique();
		table.string('nom');
	})
}

export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('ue');
};
