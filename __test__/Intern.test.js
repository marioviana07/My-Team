const Intern = require('../lib/Intern');

test("Create Intern name", () => {
    const intern = new Intern('Intern1');

    expect(intern.getName()).toEqual('Intern1');
});

test("Create Intern Id", () => {
    const intern = new Intern('808001');

    expect(intern.getId()).toEqual('808001');
});

test("Create Intern email", () => {
    const intern = new Intern('Intern@test.com');

    expect(intern.getEmail()).toEqual('Intern@test.com');
});

test("Create Intern school", () => {
    const intern = new Intern('UC Berkeley');

    expect(intern.getSchool()).toEqual('UC Berkeley');
});

test("Create Intern role", () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toEqual('Intern');
});