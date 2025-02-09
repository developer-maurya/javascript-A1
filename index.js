// Q1. Add two Numbers 
// You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.
// Input Format 
// The first line contains two integers A and B.
// Output Format = Return the result after adding two numbers.
let a = 2;
let b = 5;
console.log(a + b);

// Q2. Find if the conditions are obeyed or not? 
// You are given two number first as A� and second as B� and check if both conditions 
// (A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.
// Input Format 
// The first line contains two integers A�and B�.
// Output Format 
// Return the result as true if the given condition gets satisfied, else false.

let A = 5;
let B = 3;
console.log(A < 10 && A < B)

// Q3.Check the conditions 
// You are given two numbers A�and B�. You need to do the following checks:

let n = 20 ;
let n1 = 20 ;

// 1. if both are divisible by 10 console true.
console.log(n % 10 === 0 && n1 % 10 === 0);

n=12;
// 2. if both are not divisible by 10 console false.
console.log(n % 10 === 0 && n1 % 10 === 0);

// 3. if one of them only is divisible by 10 console true.

console.log(n % 10 === 0 || n1 % 10 === 0);

// Q4.Find the first digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number.
// Note: You have to complete First_Digit function. No need to take any input.

let N = 4567;
let first  = Math.floor(N / 1000);
console.log( first);

// Q5.Find the last digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number.
// Note: You have to complete Last_Digit function. No need to take any input.

 let N1 =4567;
 let last =  Math.floor(N % 10);
console.log(last);

// Q6.Find the remainder 
// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your 
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.

let d = 2;
let f = 9;
let re = (f % d);
console.log(re);

// Q7.Multiply two Numbers 
// You are provided with two numbers A�and B�. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.

let D = 2;
let F = 5;
let mul = (D * F);
console.log(mul);

// Q8. Marks Calculator 
// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to 
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.

let g = 50;
let h = 20;
let i = 100;
let add = (g + h + i)
console.log(add);
console.log(add / 3);