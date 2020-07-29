const express = require("express");
const routes = express.Router();
const tokenVerifier = require("./tokenVerifier");
const userControler = require("./../controllers/userControler");
const postControler = require("./../controllers/postControler");
const curtidasControler = require("./../controllers/curtidasControler");
const comentatiosControler = require("./../controllers/comentariosControler");
const interesseControler = require("./../controllers/interessesControler");
const uploadImage = require("./../controllers/uploadImagenControler");

//#region USER

// OBRIGADO RICCARDO POR ASJUDAR NESSSA MERDAAAAA
// DETESTEO ISSO AQUI NA MORAL

//login
routes.post("/user/login", userControler.login);

// retorna todos os usuarios
routes.get("/user/index", tokenVerifier, userControler.index);

// retorna um usuário específico
routes.get("/user/:id", tokenVerifier, userControler.get);

// retorna os seguidores de um usuário
routes.get("/user/getFollower/:id", tokenVerifier, userControler.getFollower);

// retorna os usuários que este usuário segue
routes.get("/user/getFollowing/:id", tokenVerifier, userControler.getFollowing);

// delete um usuário
routes.delete("/user/remove/:id", tokenVerifier, userControler.delete);

//atualiza os dados de um usuario
routes.put("/user/update", tokenVerifier, userControler.update);

// para de seguir um usuário
routes.delete("/user/remFollower", tokenVerifier, userControler.remFolower);

routes.post("/user/addFollower", tokenVerifier, userControler.addFolower);
/*
passa a seguir um usuário
{
    "id":1,
	"id_seguido":2
}
*/

routes.post("/user/create", userControler.create);
/*
cria um novo usuário
{
   "nome":"Ruan",
   "nome_usuario":"rn",
   "descricao":"nice guy",
   "dt_aniversario":"2000-03-16"
}
*/

//#endregion

//#region POST
routes.get("/post/:id", tokenVerifier, postControler.get);

routes.post("/post/create", tokenVerifier, postControler.create);

routes.delete("/post/remove/:id", tokenVerifier, postControler.remove);

routes.put("/post/update", tokenVerifier, postControler.update);
//#endregion

//#region COMENTARIO

routes.get("/comentarios", tokenVerifier, comentatiosControler.index);
routes.get(
    "/comentarios/posts/:id",
    tokenVerifier,
    comentatiosControler.getByPost
);
routes.get(
    "/comentarios/user/:id",
    tokenVerifier,
    comentatiosControler.getByUser
);
routes.delete(
    "/comentarios/remove",
    tokenVerifier,
    comentatiosControler.remove
);
routes.put("/comentarios/update", tokenVerifier, comentatiosControler.update);
routes.post("/comentarios/create", tokenVerifier, comentatiosControler.create);

//buscar comentarios do usuario
routes.get(
    "/comentarios/user/:id",
    tokenVerifier,
    comentatiosControler.getByUser
);

//#endregion

//#region CURTIDAS

routes.get("/curtidas/index", tokenVerifier, curtidasControler.index);

//buscar uma curtida pelo id do post
routes.get("/curtidas/posts/:id", tokenVerifier, curtidasControler.getByPost);

//curte um post
routes.post("/curtidas/create", tokenVerifier, curtidasControler.create);

//remove a curtida de um post
routes.delete("curtidas/remove", tokenVerifier, curtidasControler.remove);

//buscar curtidas do usuario
routes.get("/curtidas/user/:id", tokenVerifier, curtidasControler.getByUser);

//#endregion

//#region IMAGENS
//routes.post("/upload/image", tokenVerifier, ImageUpload.single("file"));

//#endregion

//#region INTERESSES

//busca os interesses de um usuario
routes.get("/interesses/user/:id", tokenVerifier, interesseControler.getByUser);

//busca os usuarios interessados em um post
routes.get("/interesses/post/:id", tokenVerifier, interesseControler.getByPost);

//adiciona um usuario na lista de interessados
routes.post("/interesses/create", tokenVerifier, interesseControler.create);

//remove um usuario da lista de interessados
routes.delete("/interesses/remove", tokenVerifier, interesseControler.remove);

//remove todos os interessados de um post
routes.delete(
    "/interesses/post/remove/:postId",
    tokenVerifier,
    interesseControler.removeByPost
);

//remove todos os interesses de um usuario
routes.delete(
    "/interesses/user/remove/:postId",
    tokenVerifier,
    interesseControler.removeByUser
);
//#endregion

//#region ARQUIVOS

routes.post("/upload/image", uploadImage.single("file"), function (
    req,
    res,
    next
) {
    res.sendStatus(200).json();
});

//#endregion

module.exports = routes;
