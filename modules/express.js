const express = require("express");
const UserModel = require("./src/models/user.model");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

// middleware nativo
app.use(express.json());
app.use(cors());

// ✅ middleware de IP
function logIpMiddleware(req, res, next) {
  const ip = req.ip;
  console.log("🌍 IP do cliente:", ip);
  next();
}


// ✅ REGISTRA o middleware (ANTES das rotas)
app.use(logIpMiddleware);

// rotas
app.get("/home", (req, res) => {
  res.contentType("text/html");
  return res.status(200).send("<h1>Hello World!</h1>");
});

// buscar todos
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao buscar usuários",
      error: error.message,
    });
  }
});

// buscar por id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// criar
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Erro ao criar usuário",
      error: error.message,
    });
  }
});

// atualizar
app.patch("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// deletar
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = app;
