// Importing Employee class
const Intern = require("../lib/Intern.js");

// Test employeeObject
const employeeObject2 = {"subordinateID": {"internName": "Test Intern Name", "internEmail": "Test Intern Email", "internSchool": "Test Intern School"}};

// Creating instances of an Employee
const employee2 = new Intern(employeeObject2);

console.log(employee2);

test("Creates an intern object", () => {
    expect(employee2.school).toEqual(expect.any(String));
});

test("Gets an intern's school", () => {
    expect(employee2.getSchool()).toEqual(expect.any(String));
});

test("Gets an intern's role", () => {
    expect(employee2.getRole()).toEqual(expect.stringContaining("Intern"));
});