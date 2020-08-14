const Manager = require('../lib/Manager');

test("Create Manager name", () => {
    const manager = new Manager('Manager1');

    expect(manager.getName()).toEqual('Manager1');
});

test("Create Manager Id", () => {
    const manager = new Manager('707001');

    expect(manager.getId()).toEqual('707001');
});

test("Create Manager email", () => {
    const manager = new Manager('manager@test.com');

    expect(manager.getEmail()).toEqual('manager@test.com');
});

test("Create Manager number", () => {
    const manager = new Manager('415-378-9002');

    expect(manager.getPhone()).toEqual('415-378-9002');
});

test("Create Manager role", () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toEqual('Manager');
});