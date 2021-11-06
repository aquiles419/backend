const database = require('../database');

class MercantilController {
    post(req, res) {
        const {
            id,
            NCM,
            DESCRICAO,
            IPI,
            DIFERIMENTO,
            ICMS,
            ICMS_SAIDA_CST,
            CESTA_BASICA,
            HORTIFRUTI,
            SUB_ITEM_ST,
            MVA_INTERNO_ST,
            MVA_EXTERNO_ST,
            BASE_REDUZIDA_ST,
            ICMS_INTERNO_ST,
            CREDITO_PRESUMIDO_PIS_COFINS,
            CST_ENTRADA_PIS_COFINS,
            CST_SAIDA_PIS_COFINS,
            DATA_CADASTRO,
            LEI_1,
            LEI_2,
            LEI_3,
            NCM_EX,
            ICMS_SAIDA_CST_SIMPLES,
            ICMS_SIMPLES,
            CFOP,
            PERCENTUAL_REDUCAO,
            ALIQUOTA_CHEIA,
            ICMS_SAIDA_BASE_REDUCAO,
            ICMS_ENTRADA_BASE_REDUCAO,
            IMPORTADO_FCP,
            ICMS_FCP,
            CFOP_SIMPLES,
            MVA_INTERNO_ST_SIMPLES,
            MVA_EXTERNO_ST_SIMPLES,
            AC_ATACADO,
            AC_INDUSTRIA,
        } = req.body;

        console.log(id, NCM, DESCRICAO,IPI,DIFERIMENTO,ICMS,ICMS_SAIDA_CST,CESTA_BASICA,HORTIFRUTI
        ,SUB_ITEM_ST,MVA_INTERNO_ST,MVA_EXTERNO_ST,BASE_REDUZIDA_ST,ICMS_INTERNO_ST,CREDITO_PRESUMIDO_PIS_COFINS,
        CST_ENTRADA_PIS_COFINS,CST_SAIDA_PIS_COFINS,DATA_CADASTRO,LEI_1,LEI_2,LEI_3,NCM_EX,
        ICMS_SAIDA_CST_SIMPLES,ICMS_SIMPLES,CFOP,PERCENTUAL_REDUCAO,ALIQUOTA_CHEIA,ICMS_SAIDA_BASE_REDUCAO,
        ICMS_ENTRADA_BASE_REDUCAO,IMPORTADO_FCP,ICMS_FCP,CFOP_SIMPLES,MVA_INTERNO_ST_SIMPLES,
        MVA_EXTERNO_ST_SIMPLES,AC_ATACADO,AC_INDUSTRIA);

        //INSERIR DADO NA TABELA
        database.insert({
            id,
            NCM,
            DESCRICAO,
            IPI,
            DIFERIMENTO,
            ICMS,
            ICMS_SAIDA_CST,
            CESTA_BASICA,
            HORTIFRUTI,
            SUB_ITEM_ST,
            MVA_INTERNO_ST,
            MVA_EXTERNO_ST,
            BASE_REDUZIDA_ST,
            ICMS_INTERNO_ST,
            CREDITO_PRESUMIDO_PIS_COFINS,
            CST_ENTRADA_PIS_COFINS,
            CST_SAIDA_PIS_COFINS,
            DATA_CADASTRO,
            LEI_1,
            LEI_2,
            LEI_3,
            NCM_EX,
            ICMS_SAIDA_CST_SIMPLES,
            ICMS_SIMPLES,
            CFOP,
            PERCENTUAL_REDUCAO,
            ALIQUOTA_CHEIA,
            ICMS_SAIDA_BASE_REDUCAO,
            ICMS_ENTRADA_BASE_REDUCAO,
            IMPORTADO_FCP,
            ICMS_FCP,
            CFOP_SIMPLES,
            MVA_INTERNO_ST_SIMPLES,
            MVA_EXTERNO_ST_SIMPLES,
            AC_ATACADO,
            AC_INDUSTRIA,
        }).table('mercantil').then(data => {
            console.log(data)
            res.json({
                message: 'Adicionado com sucesso'
            });
        }).catch(error => {
            console.log(error);
        });
    }

    list(req, res) {
        database.select('*').table('mercantil').then(data => {
            console.log(data);
            res.send(data);
        }).catch(error => {
            console.log(error);
        });
    }

    //Pegar pelo ID
    getById(req, res) {
        const id = req.params.id;
        database.select('*').table('mercantil').where({
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

        database.where({id:id}).update({DESCRICAO:DESCRICAO}).table("mercantil").then(data=>{
            res.json({message:"Segmento atualizado com sucesso"})
        }).catch(error=>{
            res.json(error)
        })
    }

    //remover dados na tabela

        removeData(req,res){
            const id = req.params.id
        
            database.where({id:id}).del().table("mercantil").then(data=>{
             res.json({message:"Segmento Removido com Sucesso"})
            }).catch(error=>{
                res.json(error)
            })
        }
}

module.exports = new MercantilController();