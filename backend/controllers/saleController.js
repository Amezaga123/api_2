const Sale = require('../models/Sale');

module.exports = {
    getAllSales: async (req, res) => {
        try {
            const sales = await Sale.findAll();
            res.status(200).json(sales);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar vendas.', error: error.message });
        }
    },

    createSale: async (req, res) => {
        const { productId, quantity } = req.body;

        if (!productId || !quantity) {
            return res.status(400).json({ message: 'Os campos productId e quantity são obrigatórios.' });
        }

        try {
            const sale = await Sale.create({ productId, quantity });
            res.status(201).json(sale);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar venda.', error: error.message });
        }
    },
};
