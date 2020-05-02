const connection = require('../database/connection');

module.exports = {

    index(request,response){
        connection('usuario').select('*').then(res=>{
            response.json(res);
        }).catch(error=>{
            response.json('{ erro:'+error.toString()+'}');
        })
    },

    get(request,response){
        const {id} = request.params;
        connection('usuario').where('id',id).then(res=>{
            response.json(res);
        }).catch(error=>{
            response.json({ erro:error.toString()});
        })
    },

    create(request,response){
        const{nome,nome_usuario,descricao,dt_criacao,dt_aniversario} = request.body;
        connection('usuario').returning('id').insert(
            {
            nome,
            nome_usuario,
            descricao,
            dt_criacao,
            dt_aniversario
            }).then(res=>{
                const ID = res.id; 
                return response.json({id: ID});
            }).catch(error=>{
                return response.json({erro: error.toString()});
            })
    },

    delete(request,response){
        const {id} = request.params
        connection('usuario').where('id',id).del().then(res=>{
            response.json(res);
        }).catch(error=>{
            response.json({ erro:error.toString()});
        })
    },

    addFolower(request,response){
        const {id,id_seguido} = request.body
        connection('usuario_usuario').insert({
            usuario_id: id,
            usuario_seguido_id:id_seguido
        }).then(res=>{
            return response.json(res)
        }).catch(error=>{
            return response.json(error)
        })
    },

    remFolower(request,response){
        const {id,id_removido} = request.body
        connection('usuario_usuario')
        .where({usuario_id:id,usuario_seguido_id: id_removido})
        .del()
        .then(res=>{
            return response.json(res)
        }).catch(error=>{
            return response.json(error)
        })
    }
}