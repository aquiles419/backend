const connection = require('../database');
const express = require('express');
const router = express.Router();
const SegmentosController = require('../controllers/SegmentosController'); //rota seguimentos
const ProdutosController = require('../controllers/ProdutosController'); //rota Produtos
const MercantilController = require('../controllers/MercantilController'); //rota mercantil

//crud da tabela segmentos

router.post('/novoSegmento', SegmentosController.post);

router.get('/segmentos', SegmentosController.list);

router.get('/segmentos/:id', SegmentosController.getById);

router.put('/segmentos/atualizar/:id', SegmentosController.updateData);

router.delete('/delete/segmento/:id', SegmentosController.removeData);





//crud da tabela produtos

router.post('/novoProduto', ProdutosController.post);

router.get('/produtos', ProdutosController.list);

router.get('/produtos/:id', ProdutosController.getById);

router.post('/produtos/filter', ProdutosController.post);


//crud da tabela mercantil

router.post('/novoMercantil', MercantilController.post);

router.get('/mercantil', MercantilController.list);

router.get('/mercantil/:id', MercantilController.getById);

router.put('/mercantil/atualizar/:id', MercantilController.updateData);

router.delete('/delete/mercantil/:id', MercantilController.removeData);

module.exports = router;

