const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(employeeObject) {
        super(employeeObject);
        this.officeNumber = employeeObject.managerOffice;
        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;