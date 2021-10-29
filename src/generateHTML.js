// Generate Team Member Card function


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
