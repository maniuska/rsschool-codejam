function recursion (arg, array, index) {
    array = array || [];
    index = index || 0;
    
    if((array.length <= index) && (arg.value)) 
        array.push([]);
    
    array[index].push(arg.value);
    
    if (arg.left) 
        recursion(arg.left, array, index+1);
    if (arg.right)  
        recursion (arg.right, array, index+1);
    
    return array;
}
