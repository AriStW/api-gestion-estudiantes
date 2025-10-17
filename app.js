const express = require('express');
const dotenv = require('dotenv')
const app = express();
const dbConnect = require('./config/db');
//const studentsRoutes = require('./routes/estudiantes');
const PORT = process.env.PORT || 3000;

dotenv.config();

dbConnect();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api estudiantes');
});

//app.use('/api', studentsRoutes);

app.listen(PORT, () => {
  console.log(`El servidor corre en el puerto ${PORT}`);
});

