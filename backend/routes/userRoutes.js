const express = require('express'); 
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para cadastrar um novo usuário
router.post('/register', userController.register);

// Rota para login
router.post('/login', userController.login);

// Rota para listar todos os usuários
router.get('/', userController.getAllUsers); // Chama diretamente a função

// Rota para atualizar um usuário existente
router.put('/:id', userController.updateUser);

module.exports = router;
