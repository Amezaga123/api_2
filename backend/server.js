const express = require('express');
const cors = require('cors'); 
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); 
const sequelize = require('./config/database');
const saleRoutes = require('./routes/saleRoutes');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); 
app.use('/api/sales', saleRoutes);


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


