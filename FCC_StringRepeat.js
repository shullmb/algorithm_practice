//Free Code Camp Bonfire: Repeat a String 

/*Repeat a given string (first argument) n times (second argument). 
Return an empty string if n is a negative number.

Input: String S, Integer N
Output: S repeated N times

If N is a positive integer or 0
	return S, N times
Else
	return ''
*/

function repeat(str,num){
	if (num >=0) {
		return str.repeat(num);		
	} else {
		return '';
	}
	
}