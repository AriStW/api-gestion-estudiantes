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
const allowedOrigins = [
  'http://localhost:5173',
 /\.vercel\.app$/
];
app.use(cors({
  origin: function(origin, callback){
     if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = `La URL ${origin} no está permitida por CORS`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','Authorization'],
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

