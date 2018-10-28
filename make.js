function sum(a, b) { 
    return a + b; 
} 
  
function make(value){
	var arr=[value];
	
	function f(arg) {
		if (typeof(arg) === 'function'){
			return arr.reduce(arg);
		}
		for(var i=0;i<arguments.length;i++){ 
        	arr.push(arguments[i]);
		}
		return f;
	}
  
return f;
  } 
