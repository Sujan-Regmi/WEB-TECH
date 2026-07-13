//QUESTION 1;
// var a = 1;
// let b = 2;
// const c = 3;
// d = 4;

// a = 10;
// b = 20;
// d = 40;
// document.write(a,"<br>", b,"<br>", c,"<br>", d);

// 2
// function celsiusToFahrenheit(c) {
//   return (c * 9) / 5 + 32;
// }

// function fahrenheitToCelsius(f) {
//   return ((f - 32) * 5) / 9;
// }

// document.write(celsiusToFahrenheit(0) + "<br>");
// document.write(celsiusToFahrenheit(100) + "<br>");
// document.write(fahrenheitToCelsius(32) + "<br>");
// document.write(fahrenheitToCelsius(212) + "<br>");

// 3
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// document.write(isLeapYear(2000) + "<br>");
// document.write(isLeapYear(1900) + "<br>");

// 4
// let age = 20;
// if (age >= 18) {
//   document.write("Adult");
// } else {
//   document.write("Minor");
// }
//5
// for (let i = 1; i <= 3; i++) {
//   document.write(i + "<br>");


// let j = 1;
// while (j <= 2) {
//   document.write(j + "<br>");
//   j++;
// }

// let k = 1;
// do {
//   document.write(k + "<br>");
//   k++;
// } while (k <= 2);

// let arr = [10, 20];
// for (let index in arr) {
//   document.write(arr[index] + "<br>");
// }

// for (let value of arr) {
//   document.write(value + "<br>");
// }

// arr.forEach(function (value) {
//   document.write(value + "<br>");
// });
//6
// let a = 10;
// let b = a;
// b = 20;
// document.write(a + " " + b + "<br>");

// let obj1 = { value: 10 };
// let obj2 = obj1;
// obj2.value = 20;
// document.write(obj1.value + " " + obj2.value);
//9
// let username = prompt("Enter your username:");
// alert(username);
//10
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));

// if (confirm("Show the result?")) {
//   alert("Sum: " + (num1 + num2));
//   alert("Difference: " + (num1 - num2));
//   alert("Multiplication: " + (num1 * num2));
//   alert("Division: " + (num1 / num2));
// }
//11
// let a = 10, b = 3;

// document.write((a + b) + " " + (a - b) + " " + (a * b) + " " + (a / b) + " " + (a % b) + "<br>");
// document.write((a > b) + " " + (a === b) + " " + (a !== b) + "<br>");
// document.write((true && false) + " " + (true || false) + " " + (!true) + "<br>");
// document.write((5 & 1) + " " + (5 | 1) + " " + (5 << 1) + "<br>");
// document.write((a > b ? "a" : "b") + "<br>");
// document.write(typeof a);
//12
// let a = Number(prompt("Enter a:"));
// let b = Number(prompt("Enter b:"));
// let c = Number(prompt("Enter c:"));

// let d = b * b - 4 * a * c;

// if (d >= 0) {
//   let root1 = (-b + Math.sqrt(d)) / (2 * a);
//   let root2 = (-b - Math.sqrt(d)) / (2 * a);
//   alert("Root1: " + root1 + " Root2: " + root2);
// } else {
//   alert("No real roots");
// }
//13
// document.write("<table border='1'>");
// document.write("<tr><th>Number</th><th>Square</th><th>Cube</th></tr>");

// for (let i = 0; i <= 10; i++) {
//   document.write("<tr><td>" + i + "</td><td>" + (i * i) + "</td><td>" + (i * i * i) + "</td></tr>");
// }

// document.write("</table>");
//14
// let num = 7;

// if (num % 2 === 0) {
//   document.write("Even");
// } else {
//   document.write("Odd");
// }
//
// let d = new Date();

// d.setFullYear(2020);
// document.write(d + "<br>");

// d.setMonth(11);
// document.write(d + "<br>");

// d.setDate(15);
// document.write(d + "<br>");

// d.setHours(22);
// document.write(d + "<br>");

// d.setMinutes(30);
// document.write(d + "<br>");

// d.setSeconds(45);
// document.write(d + "<br>");

// d.setMilliseconds(500);
// document.write(d + "<br>");

// d.setTime(1000000000000);
// document.write(d + "<br>");

//
// let countries = ["Nepal", "India", "Pakistan", "America", "Australia", "Canada"];

// document.write(countries.length + "<br>");

// document.write("<ol>");
// for (let i = 0; i < countries.length; i++) {
//   document.write("<li>" + countries[i] + "</li>");
// }
// document.write("</ol>");

// document.write(countries[4] + "<br>");

// document.write(countries.toString() + "<br>");

// countries.push("Bhutan");
// document.write(countries.length + "<br>");

// document.write(countries.shift() + "<br>");

// document.write(countries.pop() + "<br>");

// document.write(countries.join("*") + "<br>");

// countries.unshift("China");
// document.write(countries + "<br>");

// countries[2] = "Bhutan";
// document.write(countries + "<br>");

// countries.splice(2, 0, "Japan", "Korea", "China2");
// document.write(countries + "<br>");

// let removed = countries.splice(2, 2, "Bhutan");
// document.write(removed + "<br>");
// document.write(countries + "<br>");

// countries.splice(2, 1);
// document.write(countries + "<br>");

// let newArr = countries.slice(2, 5);
// document.write(newArr + "<br>");

// document.write(countries.reverse() + "<br>");

// document.write(countries.includes("Nepal") + "<br>");

// let numbers = [3, 0, 9, -5, -4, 1, 6, 20, 21, 19, 18, 4, 2];

// document.write(numbers.slice().sort((a, b) => a - b) + "<br>");
// document.write(numbers.slice().sort((a, b) => b - a) + "<br>");

// document.write(numbers.slice().reverse() + "<br>");

// document.write(Math.max(...numbers) + "<br>");
// document.write(Math.min(...numbers) + "<br>");

// let sum = numbers.reduce((a, b) => a + b, 0);
// document.write(sum + "<br>");
// document.write((sum / numbers.length) + "<br>");

// document.write(countries.slice().sort() + "<br>");
// document.write(countries.slice().sort().reverse() + "<br>");


//
// let arr = ["Nepal", "India", "China"];

// for (let index in arr) {
//   document.write(index + ":" + arr[index] + "<br>");
// }

// for (let value of arr) {
//   document.write(value + "<br>");
// }

// arr.forEach(function (value, index) {
//   document.write(index + ":" + value + "<br>");
// });
//
// let students = [
//   { name: "Ram", age: 22 },
//   { name: "Sita", age: 20 },
//   { name: "Hari", age: 25 }
// ];
// document.write(students.sort((a, b) => a.age - b.age).map(s => s.name) + "<br>");
 
// document.write(Math.min(3, 1, 5) + "<br>");
// document.write(Math.max(3, 1, 5) + "<br>");
 
// function homeMadeMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   return min;
// }
 
// function homeMadeMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
 
// document.write(homeMadeMin(nums2) + "<br>");
// document.write(homeMadeMax(nums2) + "<br>");

// let arr = [1, 2, 3, 4, 5];

// for (let value of arr) {
//   document.write(value + " ");
// }
// document.write("<br>");

// for (let index in arr) {
//   document.write(index + " ");
// }
// document.write("<br>");

// arr.forEach(function (value) {
//   document.write(value + " ");
// });
// document.write("<br>");

// document.write(arr.map(x => x * 2) + "<br>");

// document.write(arr.flatMap(x => [x, x * 2]) + "<br>");

// document.write(arr.filter(x => x % 2 === 0) + "<br>");

// document.write(arr.reduce((a, b) => a + b, 0) + "<br>");

// document.write(arr.reduceRight((a, b) => a + "," + b) + "<br>");

// document.write(arr.every(x => x > 0) + "<br>");

// document.write(arr.some(x => x > 4) + "<br>");

// document.write(Array.from("abc") + "<br>");

// for (let key of arr.keys()) {
//   document.write(key + " ");
// }
// document.write("<br>");

// for (let entry of arr.entries()) {
//   document.write(entry + " ");
// }
// document.write("<br>");

// document.write(arr.with(2, 100) + "<br>");

// let spread = [...arr, 6, 7];
// document.write(spread + "<br>");

// function sumAll(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }
// document.write(sumAll(1, 2, 3, 4) + "<br>");
// function changeColor() {
//   let choice = document.getElementById("colorSelect").value;
//   let table = document.getElementById("familyTable");

//   switch (choice) {
//     case "red":
//       table.style.backgroundColor = "red";
//       break;
//     case "green":
//       table.style.backgroundColor = "green";
//       break;
//     case "blue":
//       table.style.backgroundColor = "blue";
//       break;
//     default:
//       table.style.backgroundColor = "white";
//   }
// }
function regularFunc() {
  document.write(this + "<br>");
}
regularFunc();

const arrowFunc = () => {
  document.write(this + "<br>");
};
arrowFunc();

const obj1 = {
  name: "Ram",
  greet: function () {
    document.write(this.name + "<br>");
  }
};
obj1.greet();

const obj2 = {
  name: "Sita",
  greet: () => {
    document.write(this.name + "<br>");
  }
};
obj2.greet();

const obj3 = {
  name: "Hari",
  greet: function () {
    setTimeout(function () {
      document.write(this + "<br>");
    }, 100);
  }
};
obj3.greet();

const obj4 = {
  name: "Gita",
  greet: function () {
    setTimeout(() => {
      document.write(this.name + "<br>");
    }, 100);
  }
};
obj4.greet();
