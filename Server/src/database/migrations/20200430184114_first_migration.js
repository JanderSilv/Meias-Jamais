
exports.up = function (knex) {
    knex.schema.createTable('usuario', table => {
        table.increments('id');
        table.string('nome', 255).notNullable();
        table.string('nome_de_usuario', 255).notNullable();
        table.date('dt_criacao').notNullable();
        table.date('dt_aniversario').notNullable();
    })
        .createTable('usuario_usuario', table => {
            table.increments('id');
            table.integer('usuario_id').references('id').inTable('usuario');
            table.integer('usuario_seguido_id').references('id').inTable('usuario');
        })
};

exports.down = function (knex) {

};
