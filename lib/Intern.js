const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(employeeObject) {
        super(employeeObject);
        this.school = employeeObject.subordinateID.internSchool;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;