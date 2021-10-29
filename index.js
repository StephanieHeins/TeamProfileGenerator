// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Other Files
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

// Engineer Questions 


// Intern Questions 


// Menu List - Engineer, Intern, Done 
const menuList = [
    {
        type: "list",
        name: "employeeType",
        message: "Please select an employee to add to your list:",
        choices: [
            "Engineer",
            "Intern",
            "Done"
        ],
    },
]

// Menu Function
function menu() {
    inquirer.prompt(menuList).then((answers) => {
        switch (answers.employeeType) {
            case "Engineer":
                newEngineer();
                break;
            case "Intern":
                newIntern();
                break;
            case "Done":
                break;
        };
    })
}


// Initialize Program - Manager Questions 
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Office Number:'
        }
    ]).then(({ name, id, email, office }) => {
        // const manage = new Manager(name, id, email, office)
        // employeeArr.push(manage)
        menu()
    })
}

init()