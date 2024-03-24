import express from 'express';
const router = express.Router();
import * as etudiantController from '../controllers/etudiantController';

router.get('/:nom/:prenom', etudiantController.getEtudiant); 

export default router;
