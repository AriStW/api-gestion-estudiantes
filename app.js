const express = require('express');
const dotenv = require('dotenv')
const app = express();
const cors = require('cors');
const dbConnect = require('./config/db');
const studentsRoutes = require('./routes/students');
const PORT = process.env.PORT || 3000;
const generateToken = require('./utils/generateToken');

const TOKEN = generateToken();
console.log("Token permanente:", TOKEN);

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET','POST','PUT','DELETE'], 
  credentials: true
}));

dotenv.config();

dbConnect();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api estudiantes');
});

app.use('/api', studentsRoutes );

app.listen(PORT, () => {
  console.log(`El servidor corre en el puerto ${PORT}`);
});

