const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(employeeObject) {
        super(employeeObject);
        this.gitHub = employeeObject.engineerGitHub;
        this.role = "Engineer";
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;