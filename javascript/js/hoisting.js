


function doExample() {
	var x = 10;
	console.log( x ); // undefined
	console.log( y ); // ERROR
}


function doSomething() {
	var x = 10;
	console.log( y ); // undefined
	console.log( z ); // undefined

	if ( true ) {
		var y = 5;
	}

	var z = x + 5;
	console.log( y ); // 5
	console.log( z ); // 15

}