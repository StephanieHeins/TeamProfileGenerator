const Manager = require("../lib/Manager");

describe('Manager class', () => { 

    const empName = 'Test';
    const empId = '123'
    const empEmail = 'test@test.com'
    const empOffice = '321'
    
    it("New employee returns a role of employee", () =>{
        expect(new Manager(empName, empId, empEmail, empOffice).getRole()).toBe('Manager')
    });
    it("New employee returns matching name", () => {
        expect(new Manager(empName, empId, empEmail, empOffice).getName()).toBe(empName)
    });
    it("Employee ID matches", () => {
        expect(new Manager(empName, empId, empEmail, empOffice).getId()).toBe(empId)
    });
    it("Email address matches", () =>{
        expect(new Manager(empName, empId, empEmail, empOffice).getEmail()).toBe(empEmail)
    });
    it("Github user matches", () =>{
        expect(new Manager(empName, empId, empEmail, empOffice).getOfficeNumber()).toBe(empOffice)
    });
})