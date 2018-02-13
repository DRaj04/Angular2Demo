"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userPreferences_service_1 = require("../employee/userPreferences.service");
var HomeComponent = (function () {
    //private _userPreferencesService: UserPreferencesService;
    function HomeComponent(_userPreferencesService) {
        this._userPreferencesService = _userPreferencesService;
        //this._userPreferencesService = new UserPreferencesService();
    }
    Object.defineProperty(HomeComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colorPreference;
        },
        set: function (value) {
            this._userPreferencesService.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: "<h1>This is home page.</h1>\n                <div>\n                Colour Preference : <input type='text' [(ngModel)]='colour' [style.background]='colour' />\n                </div>\n                "
        //providers: [UserPreferencesService] //component level injector
    }),
    __metadata("design:paramtypes", [userPreferences_service_1.UserPreferencesService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.Component.js.map