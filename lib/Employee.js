// Create the Employee class
class Employee {
    // Employee constructor
    constructor(employeeObject){
        this.name = employeeObject.managerName || employeeObject.internName || employeeObject.engineerName;
        this.ID = employeeObject.managerID || employeeObject.internID || employeeObject.engineerID || "Test ID";
        this.email = employeeObject.managerEmail || employeeObject.internEmail || employeeObject.engineerEmail;
        this.role = "Employee";
    }

    // _______________________
    // Employee Object Methods
    // _______________________

    getName() {
        return this.name;
    }

    getID() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

// Export the Employee class
module.exports = Employee;