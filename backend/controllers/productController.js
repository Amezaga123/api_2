const Product = require('../models/productModel');

const register = async (req, res) => {
    const { name, price } = req.body;

    try {
        const newProduct = await Product.create({
            name,
            price
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ message: 'Erro ao criar produto' });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        res.status(500).json({ message: 'Erro ao listar produtos' });
    }
};

module.exports = {
    register,
    getAllProducts
};
