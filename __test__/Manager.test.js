const Manager = require('../lib/Manager');

test("Create Manager properties", () => {

    const manager = new Manager('Manager1', '707001', 'manager@test.com', '415-378-9002');

    expect(manager.getName()).toEqual('Manager1');
    expect(manager.getId()).toEqual('707001');
    expect(manager.getEmail()).toEqual('manager@test.com');
    expect(manager.getPhone()).toEqual('415-378-9002');
    expect(manager.getRole()).toEqual('Manager');

});