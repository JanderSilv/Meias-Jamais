const connection = require('./../database/connetcion');

module.exports = {
    index(request, response) {
        connection('curtidas').select('*').then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    create(request, response) {
        const { userId, postId } = request.params;
        connection('curtidas').insert({ usuario_id: userId, post_id: postId }).then(res => {
            const [id] = res;
            return response.json({ id });
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    remove(request, response) {
        const { userId, postId } = request.params;
        connection('curtidas').where({ usuario_id: userId, post_id: postId }).del().then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    getByUser(request, response) {
        const { id } = request.params;
        connection('curtidas').where('usuario_id', id).select('post_id').then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    },
    getByPost(request, response) {
        const { id } = request.params;
        connection('curtidas').where('post_id', id).select('usuario_id').then(res => {
            response.json(res);
        }).catch(error => {
            response.json({ err: error, msg: error.toString() });
        })
    }
}