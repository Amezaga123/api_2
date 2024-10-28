const express = require('express');
const cors = require('cors'); // Importe o middleware CORS
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Importe as rotas de produto
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); // Adicione esta linha

// Sincroniza o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso');
        app.listen(PORT, () => {
            console.log(`O servidor está sendo executado na porta ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Não foi possível conectar ao banco de dados:', error);
    });