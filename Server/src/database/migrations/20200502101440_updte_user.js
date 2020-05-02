
exports.up = function(knex) {
    return knex.schema.createTable('usuario', table => {
        table.increments('id');
        table.string('nome', 255).notNullable();
        table.string('nome_de_usuario', 255).notNullable();
        table.string('descricao',255);
        table.date('dt_criacao').notNullable();
        table.date('dt_aniversario').notNullable();
    })
        .createTable('usuario_usuario', table => {
            table.increments('id');
            table.integer('usuario_id').references('id').inTable('usuario');
            table.integer('usuario_seguido_id').references('id').inTable('usuario');
        })
        .createTable('posts',table=>{
            table.increments('id');
            table.integer('usuario_id').references('id').inTable('usuario').notNullable();
            table.string('produto_nome',64).notNullable();
            table.string('produto_descricao',256).notNullable();
            table.string('produto_image',256).notNullable();
            table.string('produto_link',256);
            table.boolean('recebido').notNullable();
        })
        .createTable('curtidas',table=>{
            table.increments('id');
            table.integer('usuario_id').references('id').inTable('usuario').notNullable();
            table.integer('post_id').references('id').inTable('posts').notNullable();
        })
        .createTable('comentarios',table=>{
            table.increments('id');
            table.integer('usuario_id').references('id').inTable('usuario').notNullable();
            table.integer('post_id').references('id').inTable('posts').notNullable();
            table.string('mensagem',256).notNullable();            
        })
};

exports.down = function(knex) {
  
};
