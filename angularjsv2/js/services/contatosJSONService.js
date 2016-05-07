
angular.module("listaTelefonica").factory("contatosJSON", function($http){

	var _getContatos = function(){
		return $http.get("json/contatos.json");
	};

	return {
		getContatos: _getContatos
	};

});
