import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PoniesComponent } from "./components/ponies/ponies.component";
import { PonyComponent } from "./components/pony/pony.component";
import { PonyReusableComponent } from "./components/pony-reusable/pony-reusable.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { RegisterForm2Component } from "./components/register-form-2/register-form-2.component";
import { RegisterForm3Component } from "./components/register-form-3/register-form-3.component";
import { RegisterFormCustomValidatorComponent } from "./components/register-form-custom-validator/register-form-custom-validator.component";
import { RegisterGroupComponent } from "./components/register-group/register-group.component";
import { RegisterChangeComponent } from "./components/register-change/register-change.component";
import { RegisterFormArrayComponent } from "./components/register-form-array/register-form-array.component";
import { RegisterFormRecordComponent } from "./components/register-form-record/register-form-record.component";



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ponies', component: PoniesComponent },
    //{ path: 'ponies/:ponyId', component: PonyComponent},
    { path: 'ponies/:ponyId', component: PonyReusableComponent },
    { path: 'registration', component : RegisterFormComponent },
    { path: 'registration-reactive-2', component : RegisterForm2Component },
    { path: 'registration-reactive-3', component : RegisterForm3Component },
    { path: 'register-custom-validator', component: RegisterFormCustomValidatorComponent },
    { path: 'register-group', component: RegisterGroupComponent },
    { path: 'register-change', component: RegisterChangeComponent },
    { path: 'register-form-array', component: RegisterFormArrayComponent },
    { path: 'register-form-record', component: RegisterFormRecordComponent },
];


