function merge(arr1,arr2){
  if (arr1.length==0) return arr2;
  if (arr2.length==0) return arr1;
  let val = arr1[0];
  let val2 = arr2[0];
  //if val from first array is smaller than val from second array, then val is smaller than all other numbers. Prepend it to the merge of the rest of the array.
  if (val<=val2) {
    arr1.shift();
    return [val,...merge(arr1,arr2)];
  }
  else{
    arr2.shift();
    return [val2,...merge(arr1,arr2)];
  }
}
let arr = [1,3,5];
let arr2 = [2,4,6];
console.log(merge(arr,arr2));

function mergeSort(arr){
  if (arr.length==1) return arr;
  return merge((mergeSort(arr.slice(0,arr.length/2))),(mergeSort(arr.slice(arr.length/2,arr.length))))
}
let nums = [5,3,7,8,1,22,19,22,100,34,2];
console.log(mergeSort(nums));
