const fs = require('fs');
const inquirer = require('inquirer');


const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamMembers = [];


const promptUser = () => {
    return inquirer.prompt([

        {
            type: "input",
            message: "What is Team's manager name? (Required)",
            name: "managerName",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your manager team's name!")
                    return false;
                }
            }
        }, {
            type: "input",
            message: "Team's manager ID? (Required)",
            name: "managerId",
            validate: idanswer => {
                if (idanswer) {
                    return true;
                } else {
                    console.log("Please enter your manager ID!")
                    return false;
                }
            }

        }, {
            type: "input",
            name: "managerEmail",
            message: "Team's manager email address? (Required)",
            validate: emailInput => {
                if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter your email Address!')
                    return false;
                }
            }
        }, {
            type: "input",
            name: "managerPhone",
            message: "What is team manager's office phone number? (Required)",
            validate: phoneInput => {
                if (/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(phoneInput)) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office phone number!")
                    return false;
                }
            }
        },
    ])


    .then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerPhone)
        teamMembers.push(manager);
        newMember();

    });

};

//Engineer questions!!!

const promptUserEngineer = () => {
    return inquirer.prompt([{
            type: "input",
            message: "What is the engineer's name? (Required)",
            name: "engineerName",
            validate: engineernameInput => {
                if (engineernameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's name!")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the engineeer ID? (Required)",
            name: "engineerId",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer ID!")
                    return false;
                }
            }
        },

        {
            type: "input",
            message: "What is the engineer's email address? (Required)",
            name: "engineerEmail",
            validate: emailInput => {
                if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter your email Address!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's GitHub Username (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!')
                    return false;
                }
            }

        },

    ])

    .then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        teamMembers.push(engineer);
        newMember();

    });

};

function newMember() {
    return inquirer.prompt([{
            type: "list",
            name: 'teamMember',
            message: 'Do you want to add another team member?',
            choices: ['Engineer', 'Inter', 'Done'],
        }])
        .then(answer => {
            if (answer.teamMember == 'Engineer') {
                return promptUserEngineer();
            } else if (answer.teamMember == 'Intern') {
                return promptUserIntern();
            } else if (answer.teamMember == "Finish building the team") {
                return buildMyTeam();
            } else {
                console.log('Select a team member!');
                return false;
            }
        })
}


promptUser();