const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("La conexion fue exitosa");
    } catch (e) {
        console.error("Error en la conexion con la Mongodb", e);
        process.exit(1);
    }
}
module.exports = dbConnect;