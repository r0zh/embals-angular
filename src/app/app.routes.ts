import { Routes } from '@angular/router';
import { HomeComponent } from "./embals/pages/home/home.component";
import { SearchComponent } from './embals/pages/search/search.component';
import { EMBALS_PATHES } from "./embals/properties/properties";

export const routes: Routes = [
    { path: EMBALS_PATHES.HOME, component: HomeComponent },
    { path: EMBALS_PATHES.SEARCH, component: SearchComponent },
    { path: "", redirectTo: EMBALS_PATHES.HOME, pathMatch: "full" },
];
