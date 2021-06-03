const http = require('http')
const express = require("express");
const app = express();
const mongoService = require("./NodeJs/Service/mongoDbService");

const produtosRouter = require("../routes/produtosRouter")
const funcionariosRouter = require("../routes/funcionariosRouter")

const { Mongoose } = require("mongoose");

const server = express();
server.use(express.json());

const hostname = '127.0.0.1';
const port = "3000";

server.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })

app.use('/producst', produtosRouter);
app.use('/employee', funcionariosRouter);