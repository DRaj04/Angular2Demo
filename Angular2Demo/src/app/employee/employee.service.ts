﻿import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService{

    constructor(private _http: Http) {

    }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:50773/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }
    //PROMISE
    //getEmployeeByCode(empCode: string): Promise<IEmployee> {
    //    return this._http.get("http://localhost:50773/api/employees/" + empCode)
    //        .map((response: Response) => <IEmployee>response.json())
    //        .toPromise()
    //        .catch(this.handlePromiseError);
    //}
    handlePromiseError(error: Response) {
        console.error(error);
        throw(error);
    }

    //OBSERVABLE
    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:50773/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

    //getEmployees(): IEmployee[] {
    //    return [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
    //        { code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' },
    //        { code: 'emp105', name: 'Jacob', gender: 'Male', annualSalary: 100000, dateOfBirth: '4/10/1976' }
    //    ];
    //}
}