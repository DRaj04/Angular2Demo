import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { SimpleComponent } from './Others/simple.Component'
import { HomeComponent } from './home/home.Component'
import { PageNotFoundComponent } from './Others/pageNotFound.Component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true }) ],
  declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent,
      SimpleComponent, HomeComponent, PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
