import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PoniesObsrvblComponent } from "./components/ponies-obsrvbl/ponies-obsrvbl.component";
import { PonyObsrvblComponent } from "./components/pony-obsrvbl/pony-obsrvbl.component";
import { PonyTypeAheadComponent } from "./components/pony-type-ahead/pony-type-ahead.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ponies-obs', component: PoniesObsrvblComponent},
    { path: 'ponies/:ponyId', component: PonyObsrvblComponent },
    { path: 'pony-type-ahead', component: PonyTypeAheadComponent},
];


