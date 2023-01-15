const arr = [1, 2, 3, 4, 5, 25, 50, 100, 500, 2500];

console.log(arr.length);

let result = "";

for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
}

console.log(result);
