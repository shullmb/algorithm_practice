/*
Free Code Camp Bonfire: Mutation

Return true if the string in the first element 
of the array contains all of the letters of 
the string in the second element of the array.
 
 Inputs: Array with two string indices
 Ourput: Boolean True or False
 
 if Array[1] contains all

INCOMPLETE
*/

function mutation(arr) {
	indA = arr[0].toLowerCase();
	indB = arr[1].toLowerCase().split('');
	
	for (i = 0; i < indB.length; i++) {
		if (indA.indexOf(indB[i]) === -1 ) {
			return false;
		} else if (indA.indexOf(indB[i] >= 0) {
			return true;
		}
	}
}


mutation(['hello','hey']);
