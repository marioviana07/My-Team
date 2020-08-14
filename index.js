const fs = require('fs');
const inquirer = require('inquirer');


const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


function runInquirer() {
    const promptArray = [{
            type: "input",
            message: "What is your name?",
            name: "name"
        }, {
            type: "input",
            message: "What is your ID?",
            name: "id"
        }, {
            type: "input",
            message: "What is your email adress?",
            name: "email"
        }

    }
}]
}