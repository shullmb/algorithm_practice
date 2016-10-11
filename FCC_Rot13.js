function rot13(str) {
    var decodedStr;
    var splitStr = str.split("");
    var decodedArray = [];

    for ( var i=0; i < splitStr.length; i++ ) {
        if ( splitStr[i].match(/\w/)) {
            var rotChar = str.charCodeAt(i);
            var decodedChar;
            
            if ( rotChar >= 78 && rotChar <= 90 ){             
                rotChar -= 13;
            }
            else {
                rotChar += 13;            
            }
            decodedChar = String.fromCharCode(rotChar);
            decodedArray.push(decodedChar);
        } else {
            console.log(splitStr[i]);            
            decodedArray.push(splitStr[i]);              
        }
    }
    decodedStr = decodedArray.join("");
    return decodedStr;
}