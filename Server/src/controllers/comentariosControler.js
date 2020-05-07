const connection = require('./../database/connetcion');

module.exports = {
    index(request, response) {
        connection('comentarios').select('*').then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    create(request, response) {
        const { usuario_id, post_id, mensagem } = request.body;
        connection('comentarios').insert({ usuario_id, post_id, mensagem }).then(res => {
            const [id] = res;
            return response.json({ id });
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    remove(request, response) {
        const { userId, postId } = request.params;
        connection('comentarios').where({ usuario_id: userId, post_id: postId }).del().then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    update(request, response) {
        const { usuario_id, post_id, mensagem } = request.body;
        connection('comentarios').where({ usuario_id: userId, post_id: postId })
            .update({
                mensagem
            }).then(res => {
                response.json(res)
            }).catch(error => {
                response.json({ err: error, msg: error.toString() });
            })
    },
    getByUser(request, response) {
        const { id } = request.params;
        connection('comentarios').where('usuario_id', id).then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    getByPost(request, response) {
        const { id } = request.params;
        connection('comentarios').where('post_id', id).then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    }
}