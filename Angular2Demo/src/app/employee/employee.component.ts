﻿import { Component, OnInit } from '@angular/core';
import { IEmployee } from './Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
    //styles: ['table {color: red;}']
})

export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading Data... Please wait...';

    constructor(private _emplopyeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {

    }

    onBackButtonClick(): void {
        this._router.navigate(['/employees'])
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._emplopyeeService.getEmployeeByCode(empCode).then( //'subscribe()' is used with observable and 'then()' with Promise
            (empData) => {
                if (empData == null) {
                    this.statusMessage = "Invalid Employee Code";
                }
                else {
                    this.employee = empData
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with the service. Please try again after sometime.";
            });
    }

    //firstname: string = "Tom";
    //lastname: string = "Hopkins";
    //gender: string = "Male";
    //age: number = 25;

    //colspan: number = 2; //both interpolation and property binding can be used for attr binding. needs to be used when there is no corrosponding 
    //dom property for the html attr.

    //showDetails: boolean = true;

    //toggleDetails(): void {
    //    this.showDetails = !this.showDetails;
    //}
}