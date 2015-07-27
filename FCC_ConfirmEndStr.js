//Assignment: Check if a string (first argument) ends with the given target string (second argument).

/*
Inputs: N String, M String
Output: True or False Boolean


If M == Final substring of N
	Return True

*/

function end(str, target) {
	var sliceStart = str.length - target.length;
	var parse = str.substr(sliceStart, target.length);
	if (parse.toLowerCase() == target.toLowerCase()) {
		return true;
	} else {
		return false;
	}
	
}

end("testing", "ing");