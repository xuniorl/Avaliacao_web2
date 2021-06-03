const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/supermarket', {useNewUrlParser: true});

const db = mongoose.connection;

const Produto = require("../Model/Produto");
const Funcionario = require("../Model/Funcionario");
const { Mongoose } = require("mongoose");

db.on('erro', (error) => {
	console.log("Conexão não foi estabelecida");
});

db.once('open', () => {
	console.log("Conexão realizada com sucesso!");
});

module.exports = {
	//Funções produtos//
	getOneProduto (id) {
		return Produto.find({_id: id});
	},
	getAllProdutos () {
		return Produto.find({});
	},
	deleteProduto (_id) {
		return Produto.deleteOne({_id});
	},
	updateProduto (produto) {
		const Produto = new Produto(produto);
		return Produto.finByIdAndUpdate({_id: Produto.id}, produto, {upsert: true, new: true});
	},

	//Funções Funcionários//

	getOneFuncionario (id) {
		return Funcionario.find({_id: id});
	},
	getAllFuncionarios () {
		return Funcionario.find({});
	},
	deleteFuncionario (_id) {
		return Funci.deleteOne({_id});
	},
	updateFuncionario (funcionario) {
		const Funcionario = new Funcionario(funcionario);
		return Funcionario.finByIdAndUpdate({_id: Funcionario.id}, produto, {upsert: true, new: true});
	}

}