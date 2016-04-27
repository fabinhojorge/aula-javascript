
var pessoa = { 
			"id" : 1, 
			"nome": "Paulo Garcia", 
			"item" : ["garrafa", "livro", "calculadora"] 
		}

console.log(pessoa.id);			//1
console.log(pessoa['id']);		//1
pessoa.nome = "José Soarez";
console.log(pessoa.item[2]);	//calculadora

delete pessoa.nome;		//deleta o atributo nome
pessoa.sexo = "masculino";	// cria novo atributo
pessoa.hasOwnProperty("nome");	//false
pessoa.hasOwnProperty("item");	//true
