import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PoniesComponent } from "./components/ponies/ponies.component";
import { PonyComponent } from "./components/pony/pony.component";
import { PonyReusableComponent } from "./components/pony-reusable/pony-reusable.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { RegisterForm2Component } from "./components/register-form-2/register-form-2.component";


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ponies', component: PoniesComponent },
    //{ path: 'ponies/:ponyId', component: PonyComponent},
    { path: 'ponies/:ponyId', component: PonyReusableComponent},
    { path: 'registration', component : RegisterFormComponent },
    { path: 'registration-reactive', component : RegisterForm2Component },
];


