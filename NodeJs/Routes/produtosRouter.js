import express from 'express';

import * as controller from '../controllers/ProdutoController';

const router = express.Router();

router.get('/products', controller.getAllProdutos);
router.get('/products/:id', getOneProduto);
router.post('/producst', controller.updateProduto);
router.put('/producst/:id', controller.updateProduto);
router.delete('/producst/:id', controller.deleteProduto);

export default router;