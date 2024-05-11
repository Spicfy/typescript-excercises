var found = true;
var grade = 88.6;
var firstName = "Bruce";
var lastName = 'Wang';
// breakation
/*found = 0;
grade = "A"; // Fix: Assign the new value directly to the existing variable 'grade'
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
