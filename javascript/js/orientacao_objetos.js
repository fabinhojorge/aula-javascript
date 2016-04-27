

function Animal(nome, peso){
	this.nome = nome;
	this.peso = peso;
}

var a = new Animal("Rex", 20);

console.debug(a instanceof Object);

Animal.prototype.andar = function(d){
	alert("Andando "+d+" metros!");
}

var a = new Animal("Rex", 20);

a.andar(150);

//Herança
function Cachorro(raca){
	this.raca = raca;
}

Cachorro.prototype = new Animal();
Cachorro.prototype.latir = function(){
	alert("Au Au");
};

var c = new Cachorro("Dalmata");
c.andar(200);
c.latir();


