/* assignment: find largest number in each array of multidimensional array and create new array of largest values

outline
inputs: n = Multidimensional Array
		n[i]= m 
output: x = Array of largest numbers

iterate over n[i] where i = m[j]
	iterate over m[j]
		find max
			compare m[j] with largest so far
			if m[j] > current max
				assign m[j] to max
				
			//or just use Math.max.apply(null, m) -- but does that defeat the purpose of the assignment?
				
		push max to x

return x	

*/
function arrayOfMaxes(arr) {
	var maxArray = [];
	for ( var i = 0; i < arr.length; i++) {
		var subArray = arr[i];
		var maxSoFar= 0;
		for ( var j = 0; j < subArray.length; j++ ) {
			if (subArray[j] > maxSoFar) {
				maxSoFar = subArray[j];
			}
		}
		maxArray.push(maxSoFar);
  }
	console.log(maxArray);
	return maxArray;
}

var test = [[2,4,3,5],[6,100,5,8],[7,9,34,65],[9000,10000,5,3400]];

arrayOfMaxes(test);