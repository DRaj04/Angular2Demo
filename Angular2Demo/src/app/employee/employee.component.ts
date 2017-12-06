import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
    //styles: ['table {color: red;}']
})

export class EmployeeComponent {
    firstname: string = "Tom";
    lastname: string = "Hopkins";
    gender: string = "Male";
    age: number = 25;

    colspan: number = 2; //both interpolation and property binding can be used for attr binding. needs to be used when there is no corrosponding 
    //dom property for the html attr.

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}