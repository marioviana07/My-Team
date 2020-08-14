const Engineer = require('../lib/Engineer');

test("Create engineer Properties", () => {

    const engineer = new Engineer('Engineer1', '909001', 'engineer@test.com', 'Pablo Neruda');

    expect(engineer.getName()).toEqual('Engineer1');
    expect(engineer.getId()).toEqual('909001');
    expect(engineer.getEmail()).toEqual('engineer@test.com');
    expect(engineer.getGithub()).toEqual('Pablo Neruda');
    expect(engineer.getRole()).toEqual('Engineer');


});