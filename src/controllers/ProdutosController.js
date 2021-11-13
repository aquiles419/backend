const database = require('../database');

class ProdutosController {
    post(req, res) {
        const {
            nome,
            description,
            valor
        } = req.body;

        console.log(nome, description, valor);

        database.insert({
            nome,
            description,
            valor
        }).table('produtos').then(data => {
            console.log(data)
            res.json({
                message: 'Adicionado com sucesso'
            });
        }).catch(error => {
            console.log(error);
        });
    }

    list(req, res) {

        const offset = parseInt(req.query.start) || 0
        const pageSize = req.query.length 
        database.count('* as count').from("produtos").first().then(count => {
            console.log("pas",count.count / pageSize);
            const total = Math.floor(count.count / pageSize)
        
            database.select('*').table('produtos').where('DESCRICAO', 'like', `%${req.query.search.value}%`)
            .offset(offset * pageSize).limit(pageSize).then(data => {
    
                res.json({data, draw: req.query.draw , recordsTotal: total , recordsFiltered:total});
            }).catch(error => {
                console.log(error);
            });
        })






    }
    
    getById(req, res) {
        const id = req.params;
        database.select('*').table('produtos').where({
            id: ID_SEGMENTO
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    filter(req, res) {
        const ean = req.params.ean;
        database.select('*').table('produtos').where({
            ean : ean
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }
}

module.exports = new ProdutosController();