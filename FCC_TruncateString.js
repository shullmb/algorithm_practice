//Free Code Camp Bonfire: Truncate a String

/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a '...' ending.

Input: String s with length n, Integer m for max string length
Output: truncated string with ellipses tacked on end
	
If length n > m
	sliceStart = 0
	sliceEnd = 
	concatenate truncated string + '...'
Else 
	do not slice string



*/
function truncate(str, num) {
	var sliced = str.slice(0, (num-3));
	if (str.length > num)  {
		return sliced + "...";
	} else {
		return str;
	}
	
}
truncate('A-tisket a-tasket A green and yellow basket', 11);
