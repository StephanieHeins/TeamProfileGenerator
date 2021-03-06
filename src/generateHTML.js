// Generate Team Member Card function
function generateTeam(teamMembers) {
    let html = ""
    teamMembers.forEach(member => {
        switch (member.getRole()) {
            case "Manager":
                html += generateManager(member)
                break;
            case "Engineer":
                html += generateEngineer(member)
                break;
            case "Intern":
                html += generateIntern(member)
                break;
            default:
                break;
        }
    })
    return html;
};

// Generate Manager
const generateManager = (manager) => {
    return `
    <div class="card my-5 mx-5" style="width: 18rem; height: 10rem;">
    <div class="card-body">
      <h5 class="card-title text-info">${manager.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()} - ${manager.getId()}</h6>
      <p class="card-text">Office ${manager.getOfficeNumber()}</p>
      <a href="mailto:${manager.getEmail()}" class="card-link">Email</a>
    </div>
  </div>
  `
};

// Generate Engineer 
const generateEngineer = (engineer) => {
    return `
    <div class="card my-5 mx-5" style="width: 18rem; height: 10rem;">
    <div class="card-body">
      <h5 class="card-title text-info">${engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()} - ${engineer.getId()}</h6>
      <a href="https://github.com/${engineer.getGithub()}" class="card-link">Github</a>
      <a href="mailto:${engineer.getEmail()}" class="card-link">Email</a>
    </div>
  </div>
  `
};


// Generate Intern
const generateIntern = (intern) => {
    return `
    <div class="card my-5 mx-5" style="width: 18rem; height: 10rem;">
    <div class="card-body">
      <h5 class="card-title text-info">${intern.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()} - ${intern.getId()}</h6>
      <p class="card-text">${intern.getSchool()}</p>
      <a href="mailto:${intern.getEmail()}" class="card-link">Email</a>
    </div>
  </div>
  `
};

// Generate header, body, etc. of HTML file 
const generateHTML = (teamMembers) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Info Cards</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <div class="d-flex justify-content-center display-3 text-info py-5 bg-light">
            Team Member Info
        </div>
        <div class="container-fluid">
            <div class="row">
            ${generateTeam(teamMembers)}
            </div>
            </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
        </html>
        `
};

module.exports = generateHTML;
