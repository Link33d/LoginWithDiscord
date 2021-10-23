const express = require("express");
const colors = require("colors");
const cookies = require('cookies');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(cookies.express('a', 'b', 'c'));

app.use("/", require("./routers/home"))
app.use("/", require("./routers/oauth"))

const port = 8000;
app.listen(port, () => {
    console.log(colors.green(`[SERVER] - Servidor Iniciado com Sucesso na Porta ${port};`));
});