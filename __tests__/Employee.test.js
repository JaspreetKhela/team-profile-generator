// Import Employee class
const Employee = require("../lib/Employee.js");

// Test employeeObjects
const employeeObject1 = {"managerName": "Test Name", "managerID": "Test ID", "managerEmail": "test@email.com", "managerOffice": "Test Office", "addSubordinate": "Intern", "subordinateName": "Test Intern Name", "subordinateID": "Test Intern ID", "subordinateEmail": "Test Intern Email", "subordinateSchool": "Test Intern School", "confirmAddAnother": true};
const employeeObject2 = {"internName": "Test Intern Name", "internID": "Test ID", "internEmail": "test@email.com", "internSchool": "Test Intern School"};
const employeeObject3 = {"engineerName": "Test Engineer Name", "engineerID": "Test ID", "engineerEmail": "test@email.com", "engineerGitHub": "Test Engineer GitHub"};

// Create instances of an Employee
const employee1 = new Employee(employeeObject1);
const employee2 = new Employee(employeeObject2);
const employee3 = new Employee(employeeObject3);

// ____________________
// Manager Object Tests
// ____________________

test("Creates an employee object", () => {
    expect(employee1.name).toEqual(expect.any(String));
    expect(employee1.ID).toEqual(expect.any(String));
    expect(employee1.email).toEqual(expect.stringContaining("@"));
});

test("Gets an employee's name", () => {
    expect(employee1.getName()).toEqual(expect.any(String));
});

test("Gets an employee's ID", () => {
    expect(employee1.getID()).toEqual(expect.any(String));
});

test("Gets an employee's email", () => {
    expect(employee1.getEmail()).toEqual(expect.stringContaining("@"));
});

test("Gets an employee's role", () => {
    expect(employee1.getRole()).toEqual(expect.stringContaining("Employee"));
});

// ___________________
// Intern Object Tests
// ___________________

test("Creates an employee object", () => {
    expect(employee2.name).toEqual(expect.any(String));
    expect(employee2.ID).toEqual(expect.any(String));
    expect(employee2.email).toEqual(expect.stringContaining("@"));
});

test("Gets an employee's name", () => {
    expect(employee2.getName()).toEqual(expect.any(String));
});

test("Gets an employee's ID", () => {
    expect(employee2.getID()).toEqual(expect.any(String));
});

test("Gets an employee's email", () => {
    expect(employee1.getEmail()).toEqual(expect.stringContaining("@"));
});

test("Gets an employee's role", () => {
    expect(employee2.getRole()).toEqual(expect.stringContaining("Employee"));
});

// _____________________
// Engineer Object Tests
// _____________________

test("Creates an employee object", () => {
    expect(employee3.name).toEqual(expect.any(String));
    expect(employee3.ID).toEqual(expect.any(String));
    expect(employee3.email).toEqual(expect.stringContaining("@"));
});

test("Gets an employee's name", () => {
    expect(employee3.getName()).toEqual(expect.any(String));
});

test("Gets an employee's ID", () => {
    expect(employee3.getID()).toEqual(expect.any(String));
});

test("Gets an employee's email", () => {
    expect(employee1.getEmail()).toEqual(expect.stringContaining("@"));
});

test("Gets an employee's role", () => {
    expect(employee3.getRole()).toEqual(expect.stringContaining("Employee"));
});