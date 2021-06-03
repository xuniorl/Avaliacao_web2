import express from 'express';

import * as controller from '../controllers/FuncionarioController';

const router = express.Router();

router.get('/employee', controller.getAllFuncionarios);
router.get('/employee/:id', getOneFuncionario);
router.post('/employee', controller.updateFuncionario);
router.put('/employee/:id', controller.updateFuncionario);
router.delete('/employee/:id', controller.deleteFuncionario);

export default router;