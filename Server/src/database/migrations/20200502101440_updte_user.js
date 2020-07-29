exports.up = function (knex) {
    return knex.schema

        .createTable("usuario", table => {
            table.increments("id");
            table.string("nome", 255).notNullable();
            table.string("nome_usuario", 255).notNullable();
            table.string("descricao", 255);
            table.date("dt_criacao").notNullable();
            table.date("dt_aniversario").notNullable();
            table.boolean("figura_publica").notNullable();
            table.string("image_link", 512).notNullable();
            table.string("email", 255).notNullable();
            table.string("senha", 64).notNullable();
        })
        .createTable("usuario_usuario", table => {
            table.increments("id");
            table
                .integer("usuario_id")
                .references("id")
                .inTable("usuario")
                .notNullable();
            table
                .integer("usuario_seguido_id")
                .references("id")
                .inTable("usuario")
                .notNullable();
            table.integer("pendente").notNullable();
        })
        .createTable("posts", table => {
            table.increments("id");
            table
                .integer("usuario_id")
                .references("id")
                .inTable("usuario")
                .notNullable();
            table.string("produto_nome", 64).notNullable();
            table.string("produto_descricao", 256).notNullable();
            table.string("produto_image", 256).notNullable();
            table.string("produto_link", 256);
            table.boolean("recebido").notNullable();
        })
        .createTable("curtidas", table => {
            table.increments("id");
            table
                .integer("usuario_id")
                .references("id")
                .inTable("usuario")
                .notNullable();
            table
                .integer("post_id")
                .references("id")
                .inTable("posts")
                .notNullable();
        })
        .createTable("comentarios", table => {
            table.increments("id");
            table
                .integer("usuario_id")
                .references("id")
                .inTable("usuario")
                .notNullable();
            table
                .integer("post_id")
                .references("id")
                .inTable("posts")
                .notNullable();
            table.string("mensagem", 256).notNullable();
        })
        .createTable("interesses", table => {
            table.increments("id");
            table
                .integer("usuario_id")
                .references("id")
                .inTable("usuario")
                .notNullable();
            table
                .integer("post_id")
                .references("id")
                .inTable("posts")
                .notNullable();
        });
};

exports.down = function (knex) {};
