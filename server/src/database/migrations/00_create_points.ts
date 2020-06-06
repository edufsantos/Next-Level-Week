import Knex from "knex";

export async function up(Knex: Knex){
  //criar tabela
  return Knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();

  })
}
export async function down(Knex: Knex){
  //deletar a tabela
  return Knex.schema.dropTable('points');
}