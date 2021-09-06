// Importing Inquirer npm package
const inquirer = require("inquirer");

// Creating an object for storing answers
var managerAnswersObject = {};

// Creating an obeject for storing information about a manager's interns
var interns = {};

// Creating an object for storing information about a manager's employees
var employees = {};

// Prompts functions to collect the project's information
function promptManager() {
    console.log(`
=====================
Manager's Information
=====================
`);
    return inquirer
    .prompt([
        // Manager's name prompt
        {
            type: "input",
            name: "managerName",
            message: "What is your name? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid manager name.");
                    return false;
                }
            }
        },
        
        // Manager ID prompt
        {
            type: "input",
            name: "managerID",
            message: "What is your employee ID? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid employee ID.");
                    return false;
                }
            }
        },

        // Manager Email prompt
        {
            type: "input",
            name: "managerEmail",
            message: "What is your email? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid employee ID.");
                    return false;
                }
            }
        },

        // Office number prompt
        {
            type: "input",
            name: "managerOffice",
            message: "What is your office number? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        console.log(`

===========================
Direct Report's Information
===========================
`);
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid employee ID.");
                    return false;
                }
            }
        },

        // Add an intern or employee prompt
        {
            type: "list",
            name: "addSubordinate",
            message: "Would you like to add an intern or an employee? (Required)",
            choices: ["Intern", "Employee"]
        },

        // Intern or employee's name prompt
        {
            type: "input",
            name: "subordinateName",
            message: "What is your direct report's name? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid name.");
                    return false;
                }
            }
        },

        // Intern or employee's ID prompt
        {
            type: "input",
            name: "subordinateID",
            message: "What is your direct report's ID? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid ID.");
                    return false;
                }
            }
        },

        // Intern or employee's email prompt
        {
            type: "input",
            name: "subordinateEmail",
            message: "What is your direct report's email? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid email.");
                    return false;
                }
            }
        },

        // Intern's school prompt
        {
            type: "input",
            name: "subordinateSchool",
            message: "What is your direct report's school name? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid school name.");
                    return false;
                }
            },
            when: (answers) => answers.addSubordinate === "Intern"
        },

        // Employee's GitHub username prompt
        {
            type: "input",
            name: "subordinateGitHub",
            message: "What is your direct report's GitHub username? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid GitHub username.");
                    return false;
                }
            },
            when: (answers) => answers.addSubordinate === "Employee"
        },

        // Confirm whether or not another intern's or employee's information is to be added prompt
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: "Would you like to add another intern's or employee's information?",
            default: false
        }
    ])
    .then((answers) => {
        // Save manager's answers to an object
        managerAnswersObject = answers;
        
        // Save the first direct report's information
        if(answers.addSubordinate === "Intern") {
            interns.subordinateID = {"internName": answers.subordinateName, "internEmail": answers.subordinateEmail, "internSchool": answers.subordinateSchool};
        }
        else {
            employees.subordinateID = {"employeeName": answers.subordinateName, "employeeEmail": answers.subordinateEmail, "employeeGitHub": answers.subordinateGitHub};
        }

        // 
        if(answers.confirmAddAnother === true) {
            // Run the prompts to add an intern or employee
            promptManagerEmployees();
        }
        else {console.log(`Thank you for using this application! Here is your information: 
        ${JSON.stringify(managerAnswersObject)}.
        
        Here is your interns' information:
        ${JSON.stringify(interns)}.
        
        Here is your employees' information: 
        ${JSON.stringify(employees)}.
        
        The HTML file for your team page is now in the dist folder in the root directory.`);}
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error.isTtyError);
        } 
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}

// Prompts functions to collect the project's information
function promptManagerEmployees() {
    console.log(`
=========================
Add Another Direct Report
=========================
`);

    return inquirer
    .prompt([
        // Add an intern or employee prompt
        {
            type: "list",
            name: "addSubordinate",
            message: "Would you like to add an intern or an employee? (Required)",
            choices: ["Intern", "Employee"]
        },

        // Intern or employee's name prompt
        {
            type: "input",
            name: "subordinateName",
            message: "What is your direct report's name? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid name.");
                    return false;
                }
            }
        },

        // Intern or employee's ID prompt
        {
            type: "input",
            name: "subordinateID",
            message: "What is your direct report's ID? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid ID.");
                    return false;
                }
            }
        },

        // Intern or employee's email prompt
        {
            type: "input",
            name: "subordinateEmail",
            message: "What is your direct report's email? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid email.");
                    return false;
                }
            }
        },

        // Intern's school prompt
        {
            type: "input",
            name: "subordinateSchool",
            message: "What is your direct report's school name? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid school name.");
                    return false;
                }
            },
            when: (answers) => answers.addSubordinate === "Intern"
        },

        // Employee's GitHub username prompt
        {
            type: "input",
            name: "subordinateGitHub",
            message: "What is your direct report's GitHub username? (Required)",
            validate: input => {
                if (input) {
                    if (typeof input === "string") {
                        return true;
                    }
                    return false;
                }
                else {
                    console.log("This is a required field. Please enter a valid GitHub username.");
                    return false;
                }
            },
            when: (answers) => answers.addSubordinate === "Employee"
        },

        // Confirm whether or not another intern's or employee's information is to be added prompt
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: "Would you like to add another intern's or employee's information?",
            default: false
          }
    ])
    .then((answers) => {
        // Save the direct report's information
        if(answers.addSubordinate === "Intern") {
            interns.subordinateID = {"internName": answers.subordinateName, "internEmail": answers.subordinateEmail, "internSchool": answers.subordinateSchool};
        }
        else {
            employees.subordinateID = {"employeeName": answers.subordinateName, "employeeEmail": answers.subordinateEmail, "employeeGitHub": answers.subordinateGitHub};
        }

        if(answers.confirmAddAnother === true) {
            // Run the prompts to add an intern or employee
            promptManagerEmployees();
        }

        // console.log(managerAnswersObject, interns, employees);

        console.log(`Thank you for using this application! Here is your information: 
        ${JSON.stringify(managerAnswersObject)}.
        
        Here is your interns' information:
        ${JSON.stringify(interns)}.
        
        Here is your employees' information: 
        ${JSON.stringify(employees)}.
        
        The HTML file for your team page is now in the dist folder in the root directory.`);
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
        } else {
        // Something else went wrong
        console.log(error);
        }
    });
}

// Run the prompts to add a manager
promptManager();