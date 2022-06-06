//insert value into an already sorted list.
//A list is sorted when length is zero, so return a list with the val inside
//otherwise compare our value with the head of the array, if it's smaller or equal than that's where it belongs, return the value prepended onto the array.
//If the val is > the head of the array, prepend the head of the array with insert val and the tail of the array
//Once we reach the end of the array or when val<=the head, we return the array or [] and all the previous values will be prepended to the array.
function insert(x,xs){
  if (xs.length==0) return [x];
  let val = xs[0];
  if (x<=val){
    return [x,...xs];
  }
  else{
    xs.shift();
    return [val,...insert(x,xs)];
  }
}
console.log(insert(3,[1,2,4]));
//We can insert into an array once it's sorted. An empty list is sorted.
//insert the head of the array onto the insertionSort of the remainder of the array.
function insertionSort(xs){
  if (xs.length==1) return xs;
  let val = xs[0];
  xs.shift();
  return insert(val,insertionSort(xs));
}

let nums = [2,5,66,3,2,1,4,78,34,43,10,100];
console.log(insertionSort(nums));
