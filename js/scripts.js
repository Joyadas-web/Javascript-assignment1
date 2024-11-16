// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd
// var firstName = "Joya ";  
// var lastName ="das"



// console.log(firstName + " " + lastName); 

// var num1= 400;
// var num2= 29;



// var sum = num1 + num2;
// var subtraction = num1 - num2;
// var division = num1 / num2;
// var multiplication = num1 * num2;

// var average = (num1 + num2) / 2;

// console.log(multiplication);


// console.log(sum);
// console.log(subtraction);
// console.log(average);

// var firstNumber="40.05";
// var secondNumber="20";

// var sum =(parseFloat(firstNumber) + parseInt(secondNumber));
// console.log(sum);

// var count1="20.5";
// var count2="10";
// var sum = (parseFloat(count1) + parseInt(count2));
// console.log(sum);

// var birthday ="24st october" ;
// if (birthday == "24st october"){
// console.log("happy birthday"); 

// } else {
//  console.log("sorry");
// }


// var aniversery="12 october";
// if ( aniversery == "12 october"){
//     console.log ( " Happy aniversery joya");
// } else{
//     console.log("sorry")
// }
// function sum_numbers() {
//     var num1 = 70;
//     var num2 = 2;
//     var sum = num1 - num2;
//     console.log(sum);
// }

// sum_numbers();

// function average ( number1, number2) {
//  var result = number1-number2;

//  console.log(result);
//  alert(result)
// }
// average(1024,128)



// 1) Create a function to convert Celsius to Fahrenheit.Use it to convert the temperatures below:

// The formula for the conversion is: F = (9 * C / 5) + 32


function divisionNumbers(c) {
    var result = (9 * c / 5) + 32;
    return result;


}
var divisionResult = divisionNumbers(38);

document.getElementById("fahr_1").innerHTML = divisionResult;

function divisionNumbers(c) {
    var result = (9 * c / 5) + 32;
    return result;


}
var divisionResult = divisionNumbers(24);

document.getElementById("fahr_2").innerHTML = divisionResult;


function divisionNumbers(c) {
    var result = (9 * c / 5) + 32;
    return result;


}
var divisionResult = divisionNumbers(-1);

document.getElementById("fahr_3").innerHTML = divisionResult;
  

// 2) The array below is the classification of students in a contest.
// It is ordered from lowest to highest grades.



var classification = ["John Hill","Mary Jane","Gary Vee","Paricia Mills","Helen Hall", "Paul Green"];

classification.shift();
console.log(classification);

var classification = [ "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];

classification.shift();
console.log(classification);

var classification = ["Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];

classification.shift();
console.log(classification);

document.getElementById("best_students").innerHTML=classification


// 3) Consider the object below:
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
};

// (a)

console.log(course.title);
document.getElementById("course_title").innerHTML=course.title

// (b)
console.log(course['categories'][0]);
document.getElementById("main_category").innerHTML = course['categories'][0];

// c) Create a method to calculate the percentage of 5 stars
//  reviews rounded with no decimal places and show the result below:
function number (num1,num2,num3,num4,num5){
    var sum = num1+num2+num3+num4+num5;
    console.log(sum);
}

number(420,80,33,20,4);
var average=(420/557)*100;
console.log(average);

var roundNumber = Math.round(75.40394973070018);
console.log(roundNumber);


var name ="75";
name +="%";
console.log(name);
document.getElementById("reviews_5_stars").innerHTML = name;


// 4) See the shopping list below:

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("chocolate");
console.log(shoppingList);


// .)

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

shoppingList.push("cheese");
shoppingList.push("Eggs");
console.log(shoppingList);













// document.getElementById("click-me").onclick = function () {
//     alert('hi joya');
// };

// document.getElementById("hover-me").onmouseover = function () {
//     alert('hi nusrat apu');
// };

// document.getElementById("leave-me").onmouseout = function () {
//     alert('hi marufa');
// };

// document.getElementById("color_button").onclick = function () {
//     document.getElementById("color_button2").style.background = "yellow";
//     document.getElementById("color_button2").style.display = "inline";
//     document.getElementById("crossButton").style.display= "inline";
// };
// document.getElementById("crossButton").onclick = function () {
//     document.getElementById("color_button2").style.display = "none";
//     document.getElementById("crossButton").style.display = "none";
// }
// var clickButton = document.getElementById("color_button")
// var showButton = document.getElementById("hide")


// clickButton.onclick = function () {
//     document.getElementById('box2').classList.toggle("show")
//     showButton.classList.toggle("show")
// }


// showButton.onclick = function () {
//     document.getElementById("box2").classList.toggle("show")
// }
// var submitButton = document.getElementById('submit');
// var nameValue = document.getElementById('name')


// submitButton.onclick = function (e) {
//     e.prevenDefault();
//     console.log(nameValue.Value);
// }