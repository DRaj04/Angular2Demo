"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployees = function () {
        return [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
            { code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' },
            { code: 'emp105', name: 'Jacob', gender: 'Male', annualSalary: 100000, dateOfBirth: '4/10/1976' }
        ];
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable()
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map