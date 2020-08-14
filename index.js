const fs = require('fs');
const inquirer = require('inquirer');


const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


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
            message: "Team's manager email address? (Required)",
            name: "managerEmail",
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
            message: "What is team manager's office phone number? (Required)",
            Choices: "managerPhone",
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



promptUser();