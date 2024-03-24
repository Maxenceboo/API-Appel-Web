import express from 'express';
import * as etudiantController from '../controllers/etudiantController' // Fix: Change the import statement to use lowercase 'etudiantController'
const router = express.Router();

router.get('/:nom/:prenom', etudiantController.getEtudiant); // Fix: Change the reference to 'EtudiantController' to 'etudiantController'

export default router;
