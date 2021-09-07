// Import Employee class
const Manager = require("../lib/Manager.js");

// Test employeeObject
const employeeObject1 = {"managerName": "Test Name", "managerID": "Test ID", "managerEmail": "test@email.com", "managerOffice": "Test Office", "addSubordinate": "Intern", "subordinateName": "Test Intern Name", "subordinateID": "Test Intern ID", "subordinateEmail": "Test Intern Email", "subordinateSchool": "Test Intern School", "confirmAddAnother": true};

// Create instances of an Employee
const employee1 = new Manager(employeeObject1);

// ____________________
// Manager Object Tests
// ____________________

test("Creates an manager object", () => {
    expect(employee1.officeNumber).toEqual(expect.any(String));
});

test("Gets an manager's role", () => {
    expect(employee1.getRole()).toEqual(expect.stringContaining("Manager"));
});