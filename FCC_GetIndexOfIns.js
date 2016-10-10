function getIndexToIns(arr, num) {
    arr.push(num);
    var sorted = arr.sort(function(a,b) {
        return a - b;
    });
    
    return sorted.indexOf(num);
}
