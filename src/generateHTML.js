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


// Generate Intern


// Generate header, body, etc. of HTML file 
