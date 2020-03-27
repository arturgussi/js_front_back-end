exports.up = function(knex) { //responsável pela criação da tabela
    return knex.schema.createTable('incidents', function (table){
        table.increments(); //incrementa sozinho -- numero do incidente
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
        });
  };
  
  exports.down = function(knex) { //se der algum problema e precisar voltar atrás
    return knex.schema.dropTable('incidents');
  };