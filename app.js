// Q no 1: Write a JavaScript program that accepts two numbers in two prompts and
//  displays the larger one in the console.

// let numberOne = +prompt("Enter your First Number");
// let numberTwo = +prompt("Enter your Second Number");

// if (numberOne > numberTwo) {
//     console.log("Your First number is greathan number 2");
// } else {
//     console.log("Your Second number is greathan number 1");
// }

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
//  an alert box with the specified sign.

// let userNumber = +prompt("Enter your Number");

// if (userNumber < 0) {
//     console.log("The sign is -" );
// } else {
//     console.log("The sign is +");
// }

// 3. Write a JavaScript program that accepts five numbers in five prompts and
//  displays the larger one in the console.

// let numberOne =  +prompt("Enter Your first number");
// let numberTwo =  +prompt("Enter Your Second number");
// let numberThree = +prompt("Enter Your Thrid number");
// let numberFour = +prompt("Enter Your fourth number");
// let numberFive = +prompt("Enter Your fivth number");

// let maxNumber = Math.max(numberOne,numberTwo,numberThree,numberFour,numberFive);

// console.log("Your biggest number is number is " +maxNumber);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

// for (let i = 0; i < 16; i++) {
//     if (i % 2 === 0) {
//         console.log(i+ " is even")
//     } else {
//         console.log(i+ " is odd")
//     }
// }

// 5. Write a JavaScript program which computes the average marks of the
//  following students Then, this average is used to determine the corresponding
//  grade.

// let englishMarks = +prompt("Enter Your English Marks");
// let mathMarks = +prompt("Enter Your Math Marks");
// let urduMarks = +prompt("Enter Your Urdu Marks");
// let islamiyatMarks = +prompt("Enter Your Islamiyat Marks");

// let totalNumber = englishMarks+mathMarks+urduMarks+islamiyatMarks;

// let gradePercentage = totalNumber / 400 * 100;

// if (gradePercentage < 60) {
//     console.log("Your Grade is E And Your percentage is " +gradePercentage);
// } else if(gradePercentage < 70){
//     console.log("Your Grade is D And Your percentage is " +gradePercentage);
// }else if(gradePercentage < 80){
//     console.log("Your Grade is C And Your percentage is " +gradePercentage);
// }else if(gradePercentage < 90){
//     console.log("Your Grade is B And Your percentage is " +gradePercentage);
// }else if(gradePercentage <= 100){
//     console.log("Your Grade is A And Your percentage is " +gradePercentage);
// }else{
//     console.log("SOmthing is wrong");
// }

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
//  multiples of three print "Fizz" instead of the number and for the multiples of five
//  print "Buzz". For numbers which are multiples of both three and five print
//  "FizzBuzz" and In the last print how much fizzBuzz and fizz and buzz in that case.

// let fizzBuzzCount = 0;
// let fizzCount = 0;
// let buzzCount = 0;


// for(let i = 1; i < 101; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i+" is FizzBuzz")
//         fizzBuzzCount++;
//     }else if (i % 5 === 0) {
//         console.log(i+ " is Buzz")
//         buzzCount++;
//     }else if (i % 3 === 0) {
//         console.log(i+ " is Fizz")
//         fizzCount++;
//     }else{
//         console.log(i)
//     }

// }

// console.log("Total FizzBuzz: " + fizzBuzzCount);
// console.log("Total Fizz: " + fizzCount);
// console.log("Total Buzz: " + buzzCount);



// 7. Write a JavaScript program to construct the following pattern, using a nested
//  for loop.
//  *
//  * *
//  * * *
//  * * * *
//  * * * * *


// for(let i = 1; i < 6; i++){
//    for(let j = 1; j <= i; j++){
//         document.write(" *   ")
        
//    }
//    document.write("<br/>");
// }


