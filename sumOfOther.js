function sumOfOther(arr){
    var sum = arr.reduce(function(a, b) {
        return a + b;
    });
    return arr.map(function(num) {
        return sum - num;
    });
}
