

var Pessoa = (function (nome, peso, altura) {
  var nome = nome || "";
  var peso = peso || 0;
  var altura = altura || 0;
  
  var calculaIMC = function() {
      return peso/(altura * altura );
  };

  return {
    meuNomePublico: "Meu nome é "+nome+"!",
    falarIMC: function() {
    	alert(calculaIMC());
    }
  };
})("Luiz", 85, 1.60);

Pessoa.falarIMC();
	
	