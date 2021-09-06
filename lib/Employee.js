class Employee {
    constructor(employeeObject){
        this.name = employeeObject.managerName || employeeObject.subordinateID.internName || employeeObject.subordinateID.engineerName;
        this.ID = employeeObject.managerID || employeeObject.subordinateID.internID || employeeObject.subordinateID.engineerID || "Test ID";
        this.email = employeeObject.managerEmail || employeeObject.subordinateID.internEmail || employeeObject.subordinateID.engineerEmail;
        this.role = "Employee";
    }

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

module.exports = Employee;