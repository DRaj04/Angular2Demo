import { Component } from '@angular/core'
import { IEmployee } from './employee'


@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})

export class EmployeeListComponent {

    employees: IEmployee[]; //any[];

    constructor()
    {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
            { code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' }
        ];
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '10/12/1985' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '3/2/1992' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '9/27/1995' },
            { code: 'emp104', name: 'Mery', gender: 'Female', annualSalary: 6500, dateOfBirth: '6/19/1990' },
            { code: 'emp105', name: 'Jacob', gender: 'Male', annualSalary: 100000, dateOfBirth: '4/10/1976' }
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
    //------
    selectedEmployeeCountRadioButton: string = "All";
    onEmployeecountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    //------
    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender == "Male").length;
    }

    getTotalFemailEmployeeCount(): number {
        return this.employees.filter(e => e.gender == "Female").length;
    }
    //------
}