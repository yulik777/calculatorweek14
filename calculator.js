function plus() {
let a = document.getElementById("first_number").value;
let b = document.getElementById("second_number").value;
let sum = (+a + +b);
document.getElementById("result").innerHTML = sum;}
function minus() {
let a = document.getElementById("first_number").value;
let b = document.getElementById("second_number").value;
let min = (a - b);
document.getElementById("result").innerHTML = min;}
function multiply() {
let a = document.getElementById("first_number").value;
let b = document.getElementById("second_number").value;
let multiply = (a * b);
document.getElementById("result").innerHTML = multiply;}
function divide() {
let a = document.getElementById("first_number").value;
let b = document.getElementById("second_number").value;
let divide = (a/b);
document.getElementById("result").innerHTML = divide;}
