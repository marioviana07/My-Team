const Employee = require("../lib/Employee");

test("Create Employee name", () => {
    const employee = new Employee('Employee1');

    expect(employee.getName()).toEqual('Employee1');
});

test("Create Employee id", () => {
    const employee = new Employee('933001');

    expect(employee.getId()).toEqual('933001');
});

test("Create Employee email", () => {
    const employee = new Employee('ppmmamama@gmail.com');

    expect(employee.getEmail()).toEqual('ppmmamam@gmail.com');
});

test("Create Employee role", () => {
    const employee = new Employee('Employee');

    expect(employee.getRole()).toEqual('Employee');
});