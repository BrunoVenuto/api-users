require("dotenv").config();

const app = require("./modules/express");
const connectToDatabase = require("./modules/src/database/connect");

const PORT = process.env.PORT || 8080;

async function start() {
  await connectToDatabase();
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

start();
