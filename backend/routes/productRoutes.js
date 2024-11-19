const express = require('express');
const Product = require('../models/productModel');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/register', productController.register); 

router.get('/', productController.getAllProducts); 

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    try {
        const [updated] = await Product.update({ name, price }, { where: { id } });
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
