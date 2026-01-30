const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const uri = process.env.MONGO_URI; // ou MONGODB_URI, depende do seu .env

    if (!uri) {
      throw new Error("MONGO_URI não definido no .env");
    }

    await mongoose.connect(uri);

    console.log("✅ Conectado ao MongoDB!");
  } catch (err) {
    console.error("❌ Erro ao conectar no MongoDB:", err);
    process.exit(1); // encerra o processo pra nodemon reiniciar corretamente
  }
}

module.exports = connectToDatabase;
