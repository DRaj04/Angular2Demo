"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = (function () {
    //public code: string;
    //public name: string;
    //public gender: string;
    //public annualSalary: number;
    //public dateOfBirth: string;
    //constructor(code: string, name: string, gender: string, annualSalary: number, dateOfBirth: string) {
    //    this.code = code;
    //    this.name = name;
    //    this.gender = gender;
    //    this.annualSalary = annualSalary;
    //    this.dateOfBirth = dateOfBirth;
    //}
    //Below is the short-hand of above code
    function Employee(code, name, gender, annualSalary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
    }
    Employee.prototype.computeMonthlySalary = function (annualSalary) {
        return annualSalary / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map