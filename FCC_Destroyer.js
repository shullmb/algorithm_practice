function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments,1);
	
    for ( var i = 0; i < args.length; i++ ) {
		arr = arr.filter(function(val) {
			return val !== args[i];
		});
    }
	return arr;
}

