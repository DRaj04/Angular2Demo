import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: ` <h3>Component LifeCycle Hook - ngOnChanges()</h3>                
                Your text : <input type='text' [(ngModel)]='userText'>
                <br/><br/>        
                <simple [simpleInput]='userText'> </simple>
                <br/><br/>
                <h3>Angular Service </h3>
                <list-employee></list-employee>
                `
})

export class AppComponent {
    //---------
    userText: string = "Dhundiraj";
    //---------
    pageHeader: string = "Employee Details"; 
    imagePath: string = 'Images/Logo.JPG'; //<img src='{{imagePath}}'> <img src='http://www.pragimtech.com/{{imagePath}}'>

    isDisabled: boolean = true; //must use property binding for non-string property instead of interpolation.

    firstName: string = 'Tom';
    lastName: string = 'Hopkins'

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    name: string = 'Tom'; //[value]='name' (input)='name=$event.target.value'
    // EVENT BINDING
    onClick(): void {
        console.log('button click ');
    }
    


    //STYLE BINDING
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;
    
    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        }
        return styles;
    }

    // CLASS BINDING
    classesToApply: string = 'boldclass italicclass';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = true;

    addClasses() {
        let classes = {
            boldclass: this.applyBoldClass,
            italicclass: this.applyItalicClass
        }
        return classes;
    }

}

//template: `<div>
//                    <h1>{{pageHeader ? pageHeader: 'No Header'}}</h1>
//                    <h1>{{getFullName()}}</h1>
//                    <img src='http://www.pragimtech.com/{{imagePath}}'>
//                    <my-employee></my-employee>

//                    <button [disabled]='isDisabled' >Click Me</button>
//                    <input id='inputId' type='text' value='Tom'>
//<hr>
//Name : <input type='text' [(ngModel)]='name'>
//You have entered:  {{name }}

//<hr>
//                    <br/>
//                    <button (click)='onClick()'>Event Binding</button>

//<hr>
//                    <br/>
//                    <button style='color:red' [style.font-weight]="isBold ? 'bold' : 'normal'">Style binding</button>
//                    <br/><br/>
//                    <button style='color:red' [style.font-size.px]="fontSize">Style binding</button>
//                    <br/><br/>
//                    <button style='color:red' [ngStyle]='addStyles()'>Style binding - ng Style</button>


//<hr>
//                    <br/>
//                    <button class="colorclass" [class]='classesToApply'>Class binding - replace  </button>
//                    <br/><br/>
//                    <button class="colorclass" [class.boldclass]='applyBoldClass'>Class binding - append </button>
//                    <br/><br/>
//                    <button class="colorclass" [ngClass]='addClasses()'>Class binding - ng class </button>
//                </div>`