// routes/productRoutes.js
const express = require('express');
const Product = require('../models/productModel');
const productController = require('../controllers/productController'); // Importe o controlador de produtos

const router = express.Router();

// Cadastrar Produto
router.post('/register', productController.register); // Utilize a função register do controlador

// Listar Todos os Produtos
router.get('/', productController.getAllProducts); // Utilize a função getAllProducts do controlador

// Atualizar Produto
// productRoutes.js
// Atualizar Produto
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, userId } = req.body;
    try {
        const [updated] = await Product.update({ name, price, userId }, {
            where: { id }
        });
        if (updated) {
            const updatedProduct = await Product.findByPk(id);
            return res.status(200).json(updatedProduct);
        }
        throw new Error('Produto não encontrado');
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

module.exports = router;