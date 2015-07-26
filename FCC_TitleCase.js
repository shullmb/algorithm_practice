//assignment: write function to Title Case a string

function titleCase(str) {
  var strArray = str.split(" ");
  var output = new Array;
  for (var i = 0; i < strArray.length; i++){
  output.push( strArray[i].replace( /\w'?\S*/, function(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }));
    
  }
  return output.join(" ");
}

titleCase("I'm a little tea pot");

titleCase("dOES tHIS wORK tOO?");

