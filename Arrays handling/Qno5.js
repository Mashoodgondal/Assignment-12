// 5. Write a js program to find second largest element in an array

let arr = [5, 10, 15, 20, 25];
let largest = arr[0];
let secondLargest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}
console.log(secondLargest); 
