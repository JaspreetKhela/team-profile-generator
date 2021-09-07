// Import Employee class
const Intern = require("../lib/Intern.js");

// Test employeeObject
const employeeObject2 = {"internName": "Test Intern Name", "internID": "Test ID", "internEmail": "test@email.com", "internSchool": "Test Intern School"};

// Create instances of an Employee
const employee2 = new Intern(employeeObject2);

// _____________________
// Engineer Object Tests
// _____________________

test("Creates an intern object", () => {
    expect(employee2.school).toEqual(expect.any(String));
});

test("Gets an intern's school", () => {
    expect(employee2.getSchool()).toEqual(expect.any(String));
});

test("Gets an intern's role", () => {
    expect(employee2.getRole()).toEqual(expect.stringContaining("Intern"));
});