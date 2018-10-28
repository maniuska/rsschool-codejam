function sumOfOther(arr){
    var sum = 0;
    for (var i= 0; i<arr.length; i++)
        sum+=arr[i];
        for (var i= 0; i<arr.length; i++)
            arr[i]= sum-arr[i];
    return arr; 
}
