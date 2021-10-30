const Intern = require("../lib/Intern");

describe('Intern class', () => { 

    const empName = 'Test';
    const empId = '123'
    const empEmail = 'test@test.com'
    const empSchool = 'school'
    
    it("New employee returns a role of employee", () =>{
        expect(new Intern(empName, empId, empEmail, empSchool).getRole()).toBe('Intern')
    });
    it("New employee returns matching name", () => {
        expect(new Intern(empName, empId, empEmail, empSchool).getName()).toBe(empName)
    });
    it("Employee ID matches", () => {
        expect(new Intern(empName, empId, empEmail, empSchool).getId()).toBe(empId)
    });
    it("Email address matches", () =>{
        expect(new Intern(empName, empId, empEmail, empSchool).getEmail()).toBe(empEmail)
    });
    it("Github user matches", () =>{
        expect(new Intern(empName, empId, empEmail, empSchool).getSchool()).toBe(empSchool)
    });
})