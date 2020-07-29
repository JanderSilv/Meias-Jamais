const connection = require("./../database/connetcion");

module.exports = {
    get(request, response) {
        const { id } = request.params;
        connection("posts")
            .where("id", id)
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    create(request, response) {
        const {
            usuario_id,
            produto_nome,
            produto_descricao,
            produto_image,
            produto_link,
            recebido
        } = request.body;
        connection("posts")
            .insert({
                usuario_id,
                produto_nome,
                produto_descricao,
                produto_image,
                produto_link,
                recebido
            })
            .then(res => {
                const [id] = res;
                return response.json({ id });
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    remove(request, response) {
        const { id } = request.params;
        connection("posts")
            .where("id", id)
            .del()
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    update(request, response) {
        const {
            produto_nome,
            produto_descricao,
            produto_image,
            produto_link,
            recebido
        } = request.body;
        connection("posts")
            .where("id", id)
            .update({
                usuario_id,
                produto_nome,
                produto_descricao,
                produto_image,
                produto_link,
                recebido
            })
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    }
};
