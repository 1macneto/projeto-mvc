const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();

// config ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// config arquivos estáticos
app.use(express.static("public"));

//config para ler dados da requisição
app.use(express.urlencoded({ extended: true }));

//rotas da aplicação
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`)
);
