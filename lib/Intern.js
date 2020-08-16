const Employee = require('./Employee');

// https://www.w3schools.com/jsref/jsref_class_super.asp#:~:text=Definition%20and%20Usage,read%20our%20JavaScript%20Classes%20Tutorial.
class Intern extends Employee { // extends es lo que primero llama a la clase Employee
    constructor(name, id, email, school) {
        super(name, id, email); // utiliza las propiedades de Employee llamando el constructor de Employee primero
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}


module.exports = Intern;