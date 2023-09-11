let array1 = [1, 2, 3, 4, 5];

let array2 = [101, 102, 103];

let sum1 = 0;
let sum2 = 0;

for (let elem of array1) {
  sum1 += elem;
}

console.log(sum1 / array1.length);

for (let elem of array2) {
  sum2 += elem;
}

console.log(sum2 / array2.length);
