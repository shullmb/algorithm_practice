/*
Free Code Camp Bonfire: Mutation

Return true if the string in the first element 
of the array contains all of the letters of 
the string in the second element of the array.
 
 Inputs: Array with two string indices
 Ourput: Boolean True or False
 

####

1)take arr[0] as standard string to compare against -- standard

2)take arr[1] as string to test -- testArr

3)split arr[1] to make and array of test characters

4)compare each element of testArr against standard to determine if it is included in the string
    indexOf()
        pos = true
        -1 = false
    
    iterate through arr of testArr
        check standard.indexOf(testArr[i])
            if -1, return false

*/

function mutation(arr){
    var standard = arr[0].toLowercase();
    var testArr = arr[1].toLowercase().split("");

    for (var i=0; i < testArr.length; i++){
        if (standard.indexOf(testArr[i]) < 0 ){
            return false;
        }
    }
    return true;

}


mutation(['hello','hey']);
