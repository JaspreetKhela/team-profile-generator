// Importing Employee class
const Engineer = require("../lib/Engineer.js");

// Test employeeObject
const employeeObject3 = {"subordinateID": {"engineerName": "Test Engineer Name", "engineerEmail": "Test Engineer Email", "engineerGitHub": "Test Engineer GitHub"}};

// Creating instances of an Employee
const employee3 = new Engineer(employeeObject3);

test("Creates an engineer's object", () => {
    expect(employee3.gitHub).toEqual(expect.any(String));
});

test("Gets an engineer's GitHub username", () => {
    expect(employee3.getGitHub()).toEqual(expect.any(String));
});

test("Gets an engineer's role", () => {
    expect(employee3.getRole()).toEqual(expect.stringContaining("Engineer"));
});