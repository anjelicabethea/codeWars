function positiveSum(arr) {
 let sum = 0;
 for(let i = 0; i < arr.length; i++) {
   // need a loop to go through the array
   if(arr[i] > 0) {
    sum += arr[i]
  }
 }
return sum;
}
