import type { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { StartupComponent } from "./startup/startup.component";
import { SoftwareComponent } from "./software/software.component";
import { BusinessComponent } from "./business/business.component";
import { AppComponent } from "./app/app.component";
import { AgencyComponent } from "./agency/agency.component";

export const LANDING_PAGES_ROUTES: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
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
  },
  {
    path: 'business',
    component: BusinessComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'agency',
    component: AgencyComponent
  },
];