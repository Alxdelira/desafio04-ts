import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'
import { UserService } from './services/UserService'

export const router = Router()

const userController = new UserController()

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.delete('/users/:id', async (req, res) => {
    try {
        const result = await UserService.deleteUser(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o usuário' });
    }
});
