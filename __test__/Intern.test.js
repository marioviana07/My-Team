const Intern = require('../lib/Intern');

test("Create Intern properties", () => {

    const intern = new Intern('Intern1', '808001', 'intern@test.com', "UC Berkeley");


    expect(intern.getName()).toEqual('Intern1');
    expect(intern.getId()).toEqual('808001');
    expect(intern.getEmail()).toEqual('intern@test.com');
    expect(intern.getSchool()).toEqual('UC Berkeley');
    expect(intern.getRole()).toEqual('Intern');
});