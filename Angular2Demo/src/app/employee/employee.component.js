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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retrywhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var EmployeeComponent = (function () {
    function EmployeeComponent(_emplopyeeService, _activatedRoute, _router) {
        this._emplopyeeService = _emplopyeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading Data... Please wait...';
    }
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/employees']);
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._emplopyeeService.getEmployeeByCode(empCode)
            .retryWhen(function (err) {
            return err.scan(function (retryCount) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'Retrying....Attempt # ' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0).delay(1000); //It is going to make 5 attemtps at every 1 sec starting from 0 to 5 count.
        })
            .subscribe(function (empData) {
            if (empData == null) {
                _this.statusMessage = "Invalid Employee Code";
            }
            else {
                _this.employee = empData;
            }
        }, function (error) {
            console.log(error);
            _this.statusMessage = "Problem with the service. Please try again after sometime.";
        });
    };
    //Unsubscribe from the service
    EmployeeComponent.prototype.onCancelButtonClick = function () {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
        //styles: ['table {color: red;}']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map