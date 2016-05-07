
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http, contatosJSON){

	$scope.nomeApp = "Lista Telefônica";
	$scope.footerFile = "view/footer.html";

	$scope.operadoras = [
			{nome:"Vivo", codigo:"15", tipo:"movel"},
			{nome:"Tim", codigo:"41", tipo:"movel"},
			{nome:"Oi", codigo:"14", tipo:"movel"},
			{nome:"Embratel", codigo:"21", tipo:"fixo"},
			{nome:"GVT", codigo:"43", tipo:"fixo"}
	];

	$scope.contatos = [];

	function carregaContatosJson(){
		//$http.get("http://localhost/angularjs/json/contatos.json")
		//Depois que levar para o serviço, a dependencia $http não precisa ser mais injetada
		contatosJSON.getContatos().success(function(data, status){
			
			console.log("JSON carregado");
			console.log(data);

			data.contatos.forEach(function(item){
				$scope.contatos.push(item);
			});
		}).error(function(data){
			console.log("Aconteceu um problema"+data);
		});
	};

	$scope.addContato = function(contato){
		//Se for por ajax, pode fazer um post em vez de push
		/*$http.post("http://localhost/angularjs/json/contatos.json", angular.copy(contato)).success(function(data){
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			//e depois recarregar
			carregaContatosJson();
		});*/
		
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.apagarContatos = function(contatos){
		
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado){
				return contato;
			}
		});
	};

	$scope.isContatosSelecionado = function(contatos){
		var i=0;
		for(i=0; i<contatos.length; i++){
			if(contatos[i].selecionado){
				return true;
			}
		}
	};

	$scope.dataHoje = new Date();

	$scope.ordenaPor = function(campo){
		$scope.criterioOrdenacao = campo;
		$scope.sentidoOrdenacao = !$scope.sentidoOrdenacao;
	};

	//Executa a função carregar contatos ao carregar o arquivo
	carregaContatosJson();

});