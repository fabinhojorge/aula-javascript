
//1ª tentativa
var c=0;
function add(){
	return c++;
}

//2ª tentativa
function add(){
	var c=0; 
	return c++;
}


add = function(){
	var c = 0; 

	return function(){
		return c++;
	};
	
}();


