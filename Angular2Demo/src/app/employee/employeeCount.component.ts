import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})

export class EmployeeCountComponent {
    //All: number = 10;
    //Male: number = 5;
    //Femail: number = 5
    selectedRadioButtonValue: string = "All";

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    All: number;

    @Input()
    Male: number;

    @Input()
    Female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}