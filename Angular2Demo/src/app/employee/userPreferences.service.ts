import { Injectable } from '@angular/core';

@Injectable() //to make the service injectable
export class UserPreferencesService {
    colorPreference: string = 'orange';
    constructor() {
        console.log('new instance of service created.');
    }
}