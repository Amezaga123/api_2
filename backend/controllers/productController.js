// controllers/productController.js
const Product = require('../models/productModel'); // Importe o modelo de Produto

// Função para cadastrar um novo produto
exports.register = async (req, res) => {
    try {
        const { name, price, userId } = req.body;
        if (!name || !price || !userId) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const product = await Product.create({ name, price, userId });
        res.status(201).json({ message: 'Produto cadastrado com sucesso!', product });
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        res.status(500).json({ message: 'Erro ao cadastrar produto', error: error.message });
    }
};

// Função para listar todos os produtos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll(); // Busca todos os produtos
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'Nenhum produto encontrado.' });
        }
        return res.status(200).json(products); // Retorna a lista de produtos
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
};
