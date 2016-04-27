
function soma (n1, n2){
	return n1 + n2;
}

//Se não tiver return o valor retornado 
//é undefined

//Função Anônima
var multiplica = function(n1, n2) {
	return n1 * n2;
}

soma(2, 8);		 // 10
multiplica(2,3); // 6

function criarFunc(func, n){
	return function(x){
		return func(n, x);
	}
}

var soma1 = criarFunc(somar, 1);
var multiplicaPor2 = criarFunc(multiplica, 2);

soma1(2);	//3
multiplicaPor2(6)	//12


