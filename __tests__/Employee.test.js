const Employee = require("../lib/Employee");

describe('Employee class', () => { 

    const empName = 'Test';
    const empId = '123'
    const empEmail = 'test@test.com'
    
    it("New employee returns a role of employee", () =>{
        expect(new Employee(empName, empId, empEmail).getRole()).toBe('Employee')
    });
    it("New employee returns matching name", () => {
        expect(new Employee(empName, empId, empEmail).getName()).toBe(empName)
    });
    it("Employee ID matches", () => {
        expect(new Employee(empName, empId, empEmail).getId()).toBe(empId)
    });
    it("Email address matches", () =>{
        expect(new Employee(empName, empId, empEmail).getEmail()).toBe(empEmail)
    });

})