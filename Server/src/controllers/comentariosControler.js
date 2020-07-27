const connection = require('./../database/connetcion');

module.exports = {

    /**
     * Retorna todos os comentarios no banco de dados.
     * Saída: [{id, usuario_id, post_id, mensagem},...]
     * @param {*} request 
     * @param {*} response
     */

    index(request, response) {
        connection('comentarios').select('*').then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },

    /**
     * Cria um comentário.
     * Entrada: [Body] {usuario_id,post_id,mensagem}
     * Saída: {id}
     * @param {*} request 
     * @param {*} response 
     */
    create(request, response) {
        const { usuario_id, post_id, mensagem } = request.body;
        connection('comentarios').insert({ usuario_id, post_id, mensagem }).then(res => {
            const [id] = res;
            return response.json({ id });
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },

    /**
     * Apaga um comentário.
     * Entrada: [Query] {userId,postId}
     * Saída: Um número que não lembro o que é
     * @param {*} request 
     * @param {*} response 
     */
    remove(request, response) {
        const { userId, postId } = request.query;
        console.log({ userId, postId })
        connection('comentarios').where({ usuario_id: userId, post_id: postId }).del().then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },

    /**
     * Edita um comentário.
     * Entrada: [Body] {id,usuario_id,post_id,mensagem}
     * Saída: Número de alterações
     * @param {*} request 
     * @param {*} response 
     */
    update(request, response) {
        const { id, usuario_id, post_id, mensagem } = request.body;
        connection('comentarios').where({ id, usuario_id, post_id })
            .update({
                mensagem
            }).then(res => {
                response.json(res)
            }).catch(error => {
                response.json({ err: error, msg: error.toString() });
            })
    },

    /**
     * Retorna todos os comentários de um usuário
     * Entrada: [Params] id
     * Saída: [{id,usuario_id,post_id,mensagem},...]
     * @param {*} request 
     * @param {*} response 
     */
    getByUser(request, response) {
        const { id } = request.params;
        connection('comentarios').where('usuario_id', id).then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },

    /**
     * Retorna todos os comentários de um post
     * Entrada: [Params] id
     * Saída: [{id,usuario_id,post_id,mensagem},...]
     * @param {*} request 
     * @param {*} response 
     */
    getByPost(request, response) {
        const { id } = request.params;
        connection('comentarios').where('post_id', id).then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    }
}