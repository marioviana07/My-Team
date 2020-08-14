const Employee = require("../lib/Employee");

test("Create Employee properties", () => {

    const employee = new Employee('Employee1', '933001', 'employee@test.com');

    expect(employee.getName()).toEqual('Employee1');
    expect(employee.getId()).toEqual('933001');
    expect(employee.getEmail()).toEqual('employee@test.com');
    expect(employee.getRole()).toEqual('Employee');

});