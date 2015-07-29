//Free Code Camp Bonfire: Slasher Flick

/*
Return the remaining elements of an array after 
chopping off n elements from the head.


inputs: array a[], integer n 
output: array b[]; a[] less n elements such that b[0]=a[n] 

if n >= a.length
	return []
else if n < 1
	return a[]
else
	return b[]
	(a[]less n elements such that b[0]=a[n])

 Upon inspection of the docs... it appears that 
Array.prototype.slice() does just that...

so... 
*/

function slasher(arr, n) {
	arr.slice(n);
}

slasher([1,2,3],2);