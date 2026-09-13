/* 
Purpose: review js concepts
prototypes vs Classes
regular functions, anonymous functions, arrow functions
callback functions
MERN: N stands for Node.js
*/

// var (global) vs let comparison (local)

var globalVariable = 100;
let localVariable = 200;
function functionName() {
  let varInFunc = "local";
}
// console.log(varInFunc); ( Will Fail)

// prototype - one tims use obect from a prototype

const oneTimeUseObject = {
  prop1: "Brent",
  prop2: "comp3123",
  method1: function (param1) {
    console.log("param1");
  },
};
//const oneTimeUseObject = new Object();

console.log(oneTimeUseObject);
console.log(oneTimeUseObject.prop1);
console.log(oneTimeUseObject.prop2);
oneTimeUseObject.method1("pizza");

// prototype using a constructor
function Student(student_name_p, course_p, lunch_p) {
  this.student_name = student_name_p;
  this.course = course_p;
  this.lunch = lunch_p;
  this.method1 = function (param1) {
    return param1;
  };
}

//
const morning_student = new Student("Brent", "comp3123", "noodles");
console.log(morning_student);
console.log(morning_student.student_name);
console.log(morning_student.course);
console.log(morning_student.lunch);
console.log(morning_student.method1(morning_student.lunch));

//Classes - always have constructors
// all class methods written in regular syntax but no function keyword
class Prof {
  constructor(prof_name_p) {
    this.prof_name = prof_name_p;
  }
  method1(lunch) {
    console.log(lunch);
  }
}
const morning_prof = new Prof("Lailly");
console.log(morning_prof.prof_name);
morning_prof.method1("burger");

//optional homework: practice a callback
// function using an array and the .map()
//function
