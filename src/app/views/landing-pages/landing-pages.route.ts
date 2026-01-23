import type { Routes } from "@angular/router";
import { StartupComponent } from "./startup/startup.component";
import { SoftwareComponent } from "./software/software.component";
import { BusinessComponent } from "./business/business.component";


export const LANDING_PAGES_ROUTES: Routes = [
  
  {
    path: 'startup',
    component: StartupComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  }
  
];