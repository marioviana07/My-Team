const Engineer = require('../lib/Engineer');

test("Create engineer name", () => {
    const engineer = new Engineer('Engineer1');

    expect(engineer.getName()).toEqual('Engineer1');
});

test("Create engineer id", () => {
    const engineer = new Engineer('909001');

    expect(engineer.getId()).toEqual('909001');
});

test("Create engineer email", () => {
    const engineer = new Engineer('engineer@test.com');

    expect(engineer.getEmail()).toEqual('engineer@test.com');
});

test("Create engineer github", () => {
    const engineer = new Engineer('Pablo Neruda');

    expect(engineer.getGithub()).toEqual('Pablo Neruda');
});

test("Create engineer role", () => {
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toEqual('Engineer');
});