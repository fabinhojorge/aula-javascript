function makeCounter() {
	// 'i' só é acessado dentro de makeCounter()
	var i = 0;

	return function() {
		console.log( ++i );
	};
}

//Observe que nesse caso as variáveis counter e counter2
// tem seus próprios escopos 'i'

var counter = makeCounter();
counter(); // 1
counter(); // 2

var counter2 = makeCounter();

counter2(); // 1
counter2(); // 2