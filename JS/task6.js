const arr1 = [1, 1, 1, 1, 1, 1, 1, 1];
const arr2 = [1, 1, 1, 1, 1, 1, 0, 1];


function checkPass(arr1) {
    let firstElement = arr1[0];
    return arr1.every(function(valueOfEachElement, index, arr) {
        return valueOfEachElement === firstElement;
    })
  }

console.log(checkPass(arr1))
