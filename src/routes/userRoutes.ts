import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

// signin, signup delete user, update user

// router.get('/', userController.getAllUser);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
