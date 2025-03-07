console.log("Hello world!");
console.log(10 + 5);

// const (константа)
// let (переменная)

// var (переменная, устаревший вариант)

let a = 10;
console.log(a);

a = "Thank you";
console.log(a);

const b = 20;
console.log(b);

// b = false; TypeError
// console.log(b);

// HW

function fourOrSeven(x) {
  // if (x == 4) {
  //     return 7
  // } else {
  //     return 4
  // }
  // return x == 4 ? 7 : 4
  // switch (x) {
  //   case 4:
  //     return 7;
  //   default:
  //     return 4;
  // }
  //return 28 / x
}

let x; //undefined
console.log(typeof x);

x = 7.5;
console.log("abc" * 5);
console.log(typeof NaN);

x = '     Beer or not to beer     ';
console.log(typeof x);

x = x.trim();
console.log(x);

let arr = x.split(' ');
console.log(arr);

let string = arr.join(', ');
console.log(string);

console.log('2' == 2);
console.log('2' === 2);

x = 10;

let sum = x++ + ++x;

