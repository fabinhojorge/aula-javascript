
//----- Valores default de funções -----
function somar(n1=0, n2=0){
	return n1+n2;
}

function somar(n1, n2){
	n1 = typeof n1 !== 'undefined' ? n1 : 0;
	n2 = typeof n2 !== 'undefined' ? n2 : 0;

	return n1+n2;
}

//----- Arguments -----

function testeArguments(){

	console.log(arguments.length);
	if(arguments.length > 0){
		console.log(arguments[0]);
	}
}

function somar(){
	var resultado = 0
	var i;
	for(i=0; i<arguments.length; i++){
		resultado += arguments[i];
	}
	return resultado;
}


//----- Função IIFE -----

var valor = 10;
(function(){
	var valor = 33;
	console.log(valor);
})();

(function(n1, n2){
	return n1+n2
})(2,3);


