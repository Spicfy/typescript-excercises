let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Bruce";
let lastName: string = 'Wang';

// breakation
/*found = 0;
grade = "A"; // Fix: Assign the new value directly to the existing variable 'grade'
firstName = false; 
*/


console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);



// using template strings
console.log(`Hi ${firstName} ${lastName}`);