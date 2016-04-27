

function Pessoa(nome){
	this.name = nome;
	this.sayHello = function(){
		alert("Olá, eu sou o "+this.name);
	}
}

var p = new Pessoa("oi");
console.debug(p);
p.sayHello();


