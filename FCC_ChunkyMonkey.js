// Free Code Camp Bonfire Assignment: Chunky Monkey

/* Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a multidimensional array.

Inputs: Array A[] - Initial Array
		Integer n - size of multidimensional array indices
Output: Multidimensional Array M[] 

initialize iteration var i
While i < A.length
	add slice of A[] of size n to new array intermediate array x[]
	push x[] to M[]

	
*/

function chunk(arr, size) {
	var i = 0;
	var slices = [];
	var multiArray = [];
	while ( i < arr.length) {
		slices = arr.slice(i,size+i);
		multiArray.push(slices);
		i+=size;
	}
	return multiArray;
}

chunk(['a', 'b', 'c', 'd'], 2);