"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        //---------
        this.userText = "Dhundiraj";
        //---------
        this.pageHeader = "Employee Details";
        this.imagePath = 'Images/Logo.JPG'; //<img src='{{imagePath}}'> <img src='http://www.pragimtech.com/{{imagePath}}'>
        this.isDisabled = true; //must use property binding for non-string property instead of interpolation.
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.name = 'Tom'; //[value]='name' (input)='name=$event.target.value'
        //STYLE BINDING
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
        // CLASS BINDING
        this.classesToApply = 'boldclass italicclass';
        this.applyBoldClass = true;
        this.applyItalicClass = true;
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    // EVENT BINDING
    AppComponent.prototype.onClick = function () {
        console.log('button click ');
    };
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    };
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldclass: this.applyBoldClass,
            italicclass: this.applyItalicClass
        };
        return classes;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
    //` <h3>Component LifeCycle Hook - ngOnChanges()</h3>                
    //                Your text : <input type='text' [(ngModel)]='userText'>
    //                <br/><br/>        
    //                <simple [simpleInput]='userText'> </simple>
    //                <br/><br/>
    //                <h3>Angular Service </h3>
    //                <list-employee></list-employee>`
], AppComponent);
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map