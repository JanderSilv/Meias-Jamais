const connection = require('./../database/connetcion');

module.exports = {

    index(request,response){
        connection('usuario').select('*').then(res=>{
            response.json(res);
        }).catch(error=>{
            response.json({err:error,msg: error.toString()});
        })
    },

    get(request,response){
        const {id} = request.params;
        connection('usuario').where('id',id).then(res=>{
            response.json(res);
        }).catch(error=>{
            response.json({err:error,msg: error.toString()});
        })
    },

    create(request,response){
        const{nome,nome_de_usuario,descricao,dt_aniversario} = request.body;
        connection('usuario').insert(
            {
            nome,
            nome_de_usuario,
            descricao,
            dt_criacao: Date.now().toString(),
            dt_aniversario:new Date(dt_aniversario)
            }).then(res=>{
                const [id] = res;
                return response.json({id});
            }).catch(error=>{
                response.json({err:error,msg: error.toString()});
            })
    },

    delete(request,response){
        const {id} = request.params
        connection('usuario').where('id',id).del().then(res=>{
            response.json(res);
        }).catch(error=>{
            response.json({err:error,msg: error.toString()});
        })
    },

    addFolower(request,response){
        const {id,id_seguido} = request.body
        connection('usuario_usuario').insert({
            usuario_id: id,
            usuario_seguido_id:id_seguido
        }).then(res=>{
            const [id] = res
            return response.json({id})
        }).catch(error=>{
            response.json({err:error,msg: error.toString()});
        })
    },

    remFolower(request,response){
        const {id,id_removido} = request.body
        connection('usuario_usuario')
        .where('usuario_id',id).where('usuario_seguido_id', id_removido)
        .del()
        .then(res=>{
            return response.json(res)
        }).catch(error=>{
            response.json({err:error,msg: error.toString()});
        })
    },

    getFollower(request,response){
        const {id} = request.params
        console.log({id})
        connection('usuario_usuario').where('usuario_seguido_id', id).then(res=>{
            return response.json(res);
        }).catch(error =>{
            response.json({err:error,msg: error.toString()});
        })
    },

    getFollowing(request,response){
        const {id} = request.params
        console.log({id})
        connection('usuario_usuario').where('usuario_id',id).then(res=>{
            return response.json(res);
        }).catch(error =>{
            response.json({err:error,msg: error.toString()});
        })
    }
}