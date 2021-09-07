// Import the Employee class
const Employee = require("./Employee.js");

// Create the Manager class, which extends the Employee class
class Manager extends Employee {
    // Manager constructor
    constructor(employeeObject) {
        super(employeeObject);
        this.officeNumber = employeeObject.managerOffice;
        this.role = "Manager";
    }

    // ______________________
    // Manager Object Methods
    // ______________________

    getRole() {
        return this.role;
    }
}

// Export the Manager class
module.exports = Manager;