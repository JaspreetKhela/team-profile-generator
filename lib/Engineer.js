// Import the Employee class
const Employee = require("./Employee.js");

// Create the Engineer class, which extends the Employee class
class Engineer extends Employee {
    // Engineer constructor
    constructor(employeeObject) {
        super(employeeObject);
        this.gitHub = employeeObject.engineerGitHub;
        this.role = "Engineer";
    }

    // _______________________
    // Engineer Object Methods
    // _______________________

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return this.role;
    }
}

// Export the Engineer class
module.exports = Engineer;