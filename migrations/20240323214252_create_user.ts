import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('user', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.bigInteger('id_user').primary().unique();
		table.string('nom');
		table.string('prenom');
		table.string('mail');
		table.string('login');
		table.string('mdp');
		table.string('role');
	})
}


export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTable('user');
};
