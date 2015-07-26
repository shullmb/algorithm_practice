//find largest integer in array and return index and value

var data = [2,3,5,234,345,32,1,234,24326,45,6,4,53,23,4,46,3,23,46454,343,23,2,42,53,43,45,6343,34,3,43,5675,568,7,86,5,4];

largest = 0;

for (i = 0; data[i] <= data.length; i++) {
	if (data[i] < largest) {
		largest = data[i];
	}
	console.log ("data: " data[i] + "Largest: " + largest);

