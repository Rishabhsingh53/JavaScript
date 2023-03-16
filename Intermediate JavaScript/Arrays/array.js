// This is an array. Array is a collection of similar items.
arr = [1,2,3,4,5,6];

// accessing items from array
console.log("The first item in the array is:\t"+arr[0])

// length of the array
console.log("Length of the array is:\t"+arr.length)

// to check if the array contains a particular item use includes method
console.log(arr.includes(5));

// to add elements in the array 
arr.push(7);
console.log(arr)

// to remove the last element from the array 
arr.pop()
console.log(arr)