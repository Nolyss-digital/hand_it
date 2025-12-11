import type { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LandingLayoutComponent } from "@components/landing-layout/landing-layout.component";

export const VIEWS_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'landing',
    component: LandingLayoutComponent,
    loadChildren: () => import('./landing-pages/landing-pages.route').then((mod) => mod.LANDING_PAGES_ROUTES)
  }
];