import express from 'express';
const router = express.Router();
import * as etudiantController from '../controllers/etudiantController';

router.get('/:nom/:prenom', etudiantController.getEtudiant); 
router.get('/create', etudiantController.createEtudiant);

export default router;
