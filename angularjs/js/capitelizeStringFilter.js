angular.module("listaTelefonica").filter("capitelizeString", function(){

	return function(input){
		var lista = input.split(" ");	//quebra nos espaços vazios

		var listaFormatada = lista.map(function(item){
			if(item=="da" || item=="de") {return item;}
			//primeira letra maiuscula e o restante minuscula
			return item[0].toUpperCase() + item.substring(1).toLowerCase();
		});
		
		return listaFormatada.join(" ");
	}

});

