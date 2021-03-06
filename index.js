// Node modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Other Files
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const writeFileAsync = util.promisify(fs.writeFile);

const teamMembers = []

// Engineer Questions 
const newEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of engineer:'
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
            name: 'github',
            message: "Github Username:"
        }
    ]).then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github)
        teamMembers.push(engineer)
        menu()
    })
}

// Intern Questions 
const newIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of intern:'
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
            name: 'school',
            message: "School:"
        }
    ]).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school)
        teamMembers.push(intern)
        menu()
    })
}

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
                renderTeam();
                break;
        };
    })
}

// Render team function 
const renderTeam = () => {

    let html = generateHTML(teamMembers);
    writeFileAsync('index.html', html)
      .then(() => console.log('Successfully created index.html!!'))
      .catch((err) => console.error(err));
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
        const manage = new Manager(name, id, email, office)
        teamMembers.push(manage)
        menu()
    })
}

init()