function sayHello(outro){
	console.debug("Olá "+outro+", eu sou o "+
		this.name+" e tenho "+this.age+" anos");
}

name = "Lucas";
age = 15;

p1 = {name:"Paulo", age: 29};
p2 = {name:"Rodrigo", age: 33};

sayHello("Miguel");
sayHello.apply(p1, ["Miguel"]);
sayHello.call(p2, "Miguel");