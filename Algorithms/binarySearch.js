module.exports = function(arr, item) {
    arr.sort((a,b)=>a - b);
      
    var low = 0;
    var high = arr.length - 1;
    var mid;
    var midElement;
      
    while (low <= high){
        mid = Math.floor((low + high) / 2); 
        midElement = arr[mid]; 
        
        if (midElement < item) {
            low = mid + 1;
        } else if (midElement > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    
    return -1; 
};
