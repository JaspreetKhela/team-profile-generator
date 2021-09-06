// Importing Inquirer npm package
const inquirer = require("inquirer");

// Creating an object for storing answers
var managerAnswersObject = {};

// Creating an obeject for storing information about a manager's interns
var interns = {};

// Creating an object for storing information about a manager's engineers
var engineers = {};

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

        // Add an intern or engineer prompt
        {
            type: "list",
            name: "addSubordinate",
            message: "Would you like to add an intern or an engineer? (Required)",
            choices: ["Intern", "Engineer"]
        },

        // Intern or engineer's name prompt
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

        // Intern or engineer's ID prompt
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

        // Intern or engineer's email prompt
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

        // Engineer's GitHub username prompt
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
            when: (answers) => answers.addSubordinate === "engineer"
        },

        // Confirm whether or not another intern's or engineer's information is to be added prompt
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: "Would you like to add another intern's or engineer's information?",
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
            engineers.subordinateID = {"engineerName": answers.subordinateName, "engineerEmail": answers.subordinateEmail, "engineerGitHub": answers.subordinateGitHub};
        }

        // 
        if(answers.confirmAddAnother === true) {
            // Run the prompts to add an intern or engineer
            promptManagerEngineers();
        }
        else {console.log(`Thank you for using this application! Here is your information: 
        ${JSON.stringify(managerAnswersObject)}.
        
        Here is your interns' information:
        ${JSON.stringify(interns)}.
        
        Here is your engineers' information: 
        ${JSON.stringify(engineers)}.
        
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
function promptManagerEngineers() {
    console.log(`
=========================
Add Another Direct Report
=========================
`);

    return inquirer
    .prompt([
        // Add an intern or engineer prompt
        {
            type: "list",
            name: "addSubordinate",
            message: "Would you like to add an intern or an engineer? (Required)",
            choices: ["Intern", "Engineer"]
        },

        // Intern or engineer's name prompt
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

        // Intern or engineer's ID prompt
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

        // Intern or engineer's email prompt
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

        // Engineer's GitHub username prompt
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
            when: (answers) => answers.addSubordinate === "Engineer"
        },

        // Confirm whether or not another intern's or engineer's information is to be added prompt
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: "Would you like to add another intern's or engineer's information?",
            default: false
          }
    ])
    .then((answers) => {
        // Save the direct report's information
        if(answers.addSubordinate === "Intern") {
            interns.subordinateID = {"internName": answers.subordinateName, "internEmail": answers.subordinateEmail, "internSchool": answers.subordinateSchool};
        }
        else {
            engineers.subordinateID = {"engineerName": answers.subordinateName, "engineerEmail": answers.subordinateEmail, "engineerGitHub": answers.subordinateGitHub};
        }

        if(answers.confirmAddAnother === true) {
            // Run the prompts to add an intern or engineer
            promptManagerEmployees();
        }

        // console.log(managerAnswersObject, interns, engineers);

        console.log(`Thank you for using this application! Here is your information: 
        ${JSON.stringify(managerAnswersObject)}.
        
        Here is your interns' information:
        ${JSON.stringify(interns)}.
        
        Here is your engineers' information: 
        ${JSON.stringify(engineers)}.
        
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