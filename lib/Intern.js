// Import the Employee class
const Employee = require("./Employee.js");

// Create the Intern class, which extends the Employee class
class Intern extends Employee {
    // Intern constructor
    constructor(employeeObject) {
        super(employeeObject);
        this.school = employeeObject.internSchool;
        this.role = "Intern";
    }

    // _____________________
    // Intern Object Methods
    // _____________________

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

// Export the Intern class
module.exports = Intern;