export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;

    //Just for demonstration purpose - not used.
    //department?: string; //Optional Property
    //computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
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
    constructor(public code: string, public name: string, public gender: string,
        public annualSalary: number, public dateOfBirth: string) {
        
    }

    computeMonthlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
}