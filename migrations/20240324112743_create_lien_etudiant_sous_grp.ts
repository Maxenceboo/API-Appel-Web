import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable('lien_etudiant_sous_grp');
    if (!hasTable) {
        return knex.schema.createTable('lien_etudiant_sous_grp', (table) => {
            table.bigInteger('code_etudiant').references('code_etudiant').inTable('etudiant');
            table.bigInteger('id_sousgrp').references('id_sousgrp').inTable('sous_grp');
            table.primary(['code_etudiant', 'id_sousgrp']);
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable('lien_etudiant_sous_grp');
    if (hasTable) {
        return knex.schema.dropTable('lien_etudiant_sous_grp');
    }
};
