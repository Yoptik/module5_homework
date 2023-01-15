let p = prompt("Введите любое число");

let oddOrEven = "";

p = +p;

console.log(typeof(p));

if (p !== +p){
  console.log('You make an error');
}

else {
  oddOrEven = (p % 2 == 0) ? 'The number is even' : 'The number is odd';
}
console.log(oddOrEven);
