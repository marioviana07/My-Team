const Employee = require("../lib/Employee");

test("Create Employee name", () => {
    const Employee = new Employee('Employee1');
    expect(Employee.getName()).toEqual(Employee1);
});