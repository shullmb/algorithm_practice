//assignment: check string to see if it is a palindrome

String.prototype.strip = function() {
  return this.replace(/\W?\s+/g,"");
};

function palindrome(str) {
  var stripped = str.toLowerCase().strip();
  var reversed = stripped.split("").reverse().join("");
  if (stripped === reversed) {
      return true;    
  } else {
      return false;
  }

}

palindrome("eye");

palindrome("lasagna is an asian gas al");
