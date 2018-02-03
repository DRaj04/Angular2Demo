import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService{
    getEmployees(): IEmployee[] {
        return [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
            { code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' },
            { code: 'emp105', name: 'Jacob', gender: 'Male', annualSalary: 100000, dateOfBirth: '4/10/1976' }
        ];
    }
}