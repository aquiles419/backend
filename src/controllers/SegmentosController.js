const { response } = require('express');
const database = require('../database');

class SegmentoController {
    post(req, res) {
        const {
            id,
            NCM,
            DESCRICAO,
            NATUREZA_RECEITA,
            SEGMENTO,
            COMPLEMENTO,
            SEGMENTO_FINAL,
            OBSERVACAO,
            CEST,
            DESCRICAO_CEST,
            CODIGO_ANP,
            DESCRICAO_ANP,
            DATA_CADASTRO,
            ATIVO
        } = req.body;

        console.log(id, NCM, DESCRICAO,NATUREZA_RECEITA,SEGMENTO,COMPLEMENTO,SEGMENTO_FINAL,OBSERVACAO,
            CEST,DESCRICAO_CEST,CODIGO_ANP,DESCRICAO_ANP,DATA_CADASTRO,ATIVO);


        //inserir dado no banco
        database.insert({
            id,
            NCM,
            DESCRICAO,
            NATUREZA_RECEITA,
            SEGMENTO,
            COMPLEMENTO,
            SEGMENTO_FINAL,
            OBSERVACAO,
            CEST,
            DESCRICAO_CEST,
            CODIGO_ANP,
            DESCRICAO_ANP,
            DATA_CADASTRO,
            ATIVO,
        }).table('segmentos').then(data => {
            console.log(data)
            res.json({
                message: 'Adicionado com sucesso'
            });
        }).catch(error => {
            console.log(error);
        });
    }
//Listar dados do banco
    list(req, res) {
        database.select('*').table('segmentos').then(data => {
            console.log(data);
            res.send(data);
        }).catch(error => {
            console.log(error);
        });
    }
//Pegar pelo ID
    getById(req, res) {
        const id = req.params.id;
        database.select('*').table('segmentos').where({
            id: id
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

//atualizar dados na tabela

    updateData(req,res){
        const id = req.params.id
        const {DESCRICAO} = req.body

        database.where({id:id}).update({DESCRICAO:DESCRICAO}).table("segmentos").then(data=>{
            res.json({message:"Segmento atualizado com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }

    //remover dados na tabela

    removeData(req,res){
        const id = req.params.id
    
        database.where({id:id}).del().table("segmentos").then(data=>{
         res.json({message:"Segmento Removido com Sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }



}

module.exports = new SegmentoController();