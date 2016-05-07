
angular.module("listaTelefonica").directive("imprimeData", function(){

	

	return {
		templateUrl:"view/imprimeData.html",
		restrict:"AE",
		scope:{
			dataHoje: "=date",
			title: "@titulo"
		},
		transclude:"true"
	};

});


