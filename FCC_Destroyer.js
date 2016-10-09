function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments,1);
    console.log("args: ", args );
    
    function byArgs(val) {
        console.log("Array Value: ", val);

        for (var i = 0; i < args.length; i++ ){
            console.log( "Argument: ", args[i]);
            
             val !== args[i];
            
        }

    }

    newArr = arr.filter(byArgs);
    return newArr;
}