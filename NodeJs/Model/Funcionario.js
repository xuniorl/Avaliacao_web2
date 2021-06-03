const mongoose = require("mongoose");

const FuncionarioSchema = mongoose.Schema({
	name: {
		type: "string",
		required: true,
	},
	cpf: {
		type: "string",
        	required: true,
	},
	salario: "number",
	usuario: "string",
});

const Funcionario = mongoose.model("Funcionario", FuncionarioSchema);
