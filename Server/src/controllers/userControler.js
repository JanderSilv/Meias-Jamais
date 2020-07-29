const connection = require("./../database/connetcion");
const jwt = require("jsonwebtoken");

module.exports = {
    index(request, response) {
        connection("usuario")
            .select("*")
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    login(request, response) {
        const { password, login } = request.body;
        connection("usuario")
            .where({ nome_usuario: login, senha: password })
            .orWhere({ email: login, senha: password })
            .then(res => {
                const usr = res[0];

                console.log(
                    "[userControler][login]:",
                    usr.nome_usuario,
                    usr.senha
                );
                let token = jwt.sign({ id: usr.id }, "teste", {
                    expiresIn: "12h"
                });
                response.json({ token });
            })
            .catch(error => {
                console.log("deu ruim");
                response.json({ err: error, msg: error.toString() });
            });
    },

    get(request, response) {
        const { id } = request.params;
        connection("usuario")
            .where("id", id)
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    update(request, response) {
        const { nome, descricao } = request.body;
        connection("usuario")
            .where("id", id)
            .update({
                nome,
                descricao
            })
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    create(request, response) {
        const {
            nome,
            email,
            figura_publica,
            nome_usuario,
            descricao,
            dt_aniversario,
            image_link,
            senha
        } = request.body;

        connection("usuario")
            .insert({
                nome,
                nome_usuario,
                descricao,
                dt_criacao: Date.now().toString(),
                dt_aniversario: new Date(dt_aniversario),
                figura_publica,
                image_link,
                email,
                senha
            })
            .then(res => {
                const [id] = res;
                return response.json({ id });
            })
            .catch(error => {
                response
                    .status(404)
                    .json({ err: error, msg: error.toString() });
            });
    },

    delete(request, response) {
        const { id } = request.params;
        connection("usuario")
            .where("id", id)
            .del()
            .then(res => {
                response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    addFolower(request, response) {
        const { my_id, followed_id, pendente } = request.body;
        connection("usuario_usuario")
            .insert({
                usuario_id: my_id,
                usuario_seguido_id: followed_id,
                pendente
            })
            .then(res => {
                const [my_id] = res;
                return response.json({ my_id });
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    remFolower(request, response) {
        const { my_id, followed_id } = request.query;

        connection("usuario_usuario")
            .where("usuario_id", my_id)
            .where("usuario_seguido_id", followed_id)
            .del()
            .then(res => {
                return response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    getFollower(request, response) {
        const { id } = request.params;
        connection("usuario_usuario")
            .where("usuario_seguido_id", id)
            .select("usuario_id")
            .then(res => {
                return response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    },

    getFollowing(request, response) {
        const { id } = request.params;
        connection("usuario_usuario")
            .where("usuario_id", id)
            .select("usuario_seguido_id")
            .as("usuario_id")
            .then(res => {
                return response.json(res);
            })
            .catch(error => {
                response.json({ err: error, msg: error.toString() });
            });
    }
};
