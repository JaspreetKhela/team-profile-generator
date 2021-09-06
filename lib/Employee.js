class Employee {
    constructor(employeeObject){
        this.name = employeeObject.managerName || employeeObject.internName || employeeObject.engineerName;
        this.ID = employeeObject.managerID || employeeObject.internID || employeeObject.engineerID;
        this.email = employeeObject.managerEmail || employeeObject.internEmail || employeeObject.engineerEmail;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;