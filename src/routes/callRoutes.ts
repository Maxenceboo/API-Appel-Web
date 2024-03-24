import express from 'express';
import * as callController from '../controllers/callController';

const router = express.Router();

router.put('/signin/:id_call', callController.updateCall);

export default router;
