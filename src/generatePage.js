const Employee = require("../lib/Employee")

let startCard = [];

function startCard(teamMembers) {

    //Manager Card

    const generateManager = (manager) => {
        return `
        <div class= "card col-3" style="width: 30rem;">
            <div class= "card-header bg-success text-white">
                <h2 class= "card-title">${manager.getName()}</h2>
                <h3 class= "card-title"><i class= "fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Phone:${manager.getPhone()}</li>
                </ul>
            </div>
         </div>
         ;`
    }

    //Engineer Card

    const generateEngineer = (engineer) => {

        return `
        <div class= "card col-3" style="width: 30rem;">
            <div class= "card-header bg-success text-white">
                <h2 class= "card-title">${engineer.getName()}</h2>
                <h3 class= "card-title"><i class= "fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
         </div>
         ;`
    }

    //Intern Card

    const generateIntern = (intern) => {
        return `
        <div class= "card col-3" style="width: 30rem;">
            <div class= "card-header bg-success text-white">
                <h2 class= "card-title">${intern.getName()}</h2>
                <h3 class= "card-title"><i class= "fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School:${intern.getSchool()}</li>
                </ul>
            </div>
         </div>
         ;`
    }

    startCard = [
        ...teamMembers.filter(employee => employee.getRole() === "Manager").map(managerData => generateManager(managerData)),
        ...teamMembers.filter(employee => employee.getRole() === "Engineer").map(engineerData => generateEngineer(engineerData)),
        ...teamMembers.filter(employee => employee.getRole() === "Intern").map(internData => generateIntern(internData)),
    ]
}



//Lets create the page

module.exports = teamMembers => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
    
    <header class="container-fluid">
            <nav class="navbar navbar-dark justify-content-center" style="background-color: #E84756;">
                <h1 class=" text-light p-4">My Team</h1>
            </nav>
    </header>
    <div class="container">
         <div class="row">
             <div class="my-team col-12 d-flex flex-wrap justify-content-center">
             ${startCard(teamMembers)}
             </div>
         </div>
    </div>
    
    </body>

    </html>
    
    `
};