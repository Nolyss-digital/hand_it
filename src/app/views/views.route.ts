import type { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LandingLayoutComponent } from "@components/landing-layout/landing-layout.component";
import { AgencyComponent } from "@views/agency/agency.component";
import { BusinessComponent } from "@views/business/business.component";

export const VIEWS_ROUTES: Routes = [
  {
    path: '',
    component: BusinessComponent
  },
  {
    path: 'landing',
    component: LandingLayoutComponent,
    loadChildren: () => import('./landing-pages/landing-pages.route').then((mod) => mod.LANDING_PAGES_ROUTES)
  }
];