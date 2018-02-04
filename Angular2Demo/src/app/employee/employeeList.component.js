"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        //------
        this.selectedEmployeeCountRadioButton = "All";
        //this.employees = this._employeeService.getEmployees();
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //as service call might be time consuming, better call it in ngOnInit() instead of constructors.
        //this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees().subscribe(function (employeeData) {
            return _this.employees = employeeData;
        });
    };
    //constructor()
    //{
    //    this.employees = [
    //        //{ code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
    //        //{ code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
    //        //{ code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
    //        //{ code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' }
    //    ];
    //}
    //getEmployees(): void {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
    //        { code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' },
    //        { code: 'emp105', name: 'Jacob', gender: 'Male', annualSalary: 100000, dateOfBirth: '4/10/1976' }
    //    ];
    //}
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.onEmployeecountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    //------
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender == "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemailEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender == "Female"; }).length;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css'],
        providers: [employee_service_1.EmployeeService] //registering EmployeeService to component 
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map