const Engineer = require("../lib/Engineer");

describe('Employee class', () => { 

    const empName = 'Test';
    const empId = '123'
    const empEmail = 'test@test.com'
    const empGithub = 'githubtest'
    
    it("New employee returns a role of employee", () =>{
        expect(new Engineer(empName, empId, empEmail, empGithub).getRole()).toBe('Engineer')
    });
    it("New employee returns matching name", () => {
        expect(new Engineer(empName, empId, empEmail, empGithub).getName()).toBe(empName)
    });
    it("Employee ID matches", () => {
        expect(new Engineer(empName, empId, empEmail, empGithub).getId()).toBe(empId)
    });
    it("Email address matches", () =>{
        expect(new Engineer(empName, empId, empEmail, empGithub).getEmail()).toBe(empEmail)
    });
    it("Github user matches", () =>{
        expect(new Engineer(empName, empId, empEmail, empGithub).getGitHub()).toBe(empGithub)
    });

})