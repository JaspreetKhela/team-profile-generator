// Import the modules related to generating an HTML document for this application
const pageTop = require("./pageTop.js");
const intern = require("./intern.js");
const engineer = require("./engineer.js");
const PageBottom = require("./pageBottom.js");

// Test object and arrays
// managerClassInstance = {"name":"a","ID":"a","email":"a","role":"Manager","officeNumber":"a"};
// internClassInstances = [{"name":"b","ID":"b","email":"b","role":"Intern","school":"b"},{"name":"c","ID":"c","email":"c","role":"Intern","school":"c"}];
// engineerClassInstances = [{"name":"d","ID":"d","email":"d","role":"Engineer","gitHub":"d"},{"name":"e","ID":"e","email":"e","role":"Engineer","gitHub":"e"}];

// Array that will contain string elements of the HTML document 
var outputArray = [];

// Function for generating the HTML document
function generatePage(managerClassInstance, internClassInstances, engineerClassInstances) {
    // Add HTML strings to the outputArray after they are generated
    outputArray.push(pageTop.pageTopHandler(managerClassInstance));
    outputArray.push(intern.internCardsHandler(internClassInstances));
    outputArray.push(engineer.engineerCardsHandler(engineerClassInstances));
    outputArray.push(PageBottom);

    //console.log(outputArray.join(""));

    // Return the elements of the outputArray as a single string
    return outputArray.join("");
}

// generatePage(managerClassInstance, internClassInstances, engineerClassInstances);

// Export the generatePage function
module.exports = { generatePage };