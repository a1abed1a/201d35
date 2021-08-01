let name = prompt("What's your name?");
console.log(typeof name)
let age = Number(prompt("How old are you?"));
console.log(typeof age)
let weight = Number(prompt("Enter your Weight in kg:"));
console.log(typeof weight)
let height = Number(prompt("Enter your Height in m:"));
console.log(typeof height)
let bmi = weight/(height*height);
alert("Name : "+name+"\nAge : "+age+"\nWeight : "+weight+"\nHeight : "+height+"\nYour BMI is "+bmi);
