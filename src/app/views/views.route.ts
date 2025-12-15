import type { Routes } from "@angular/router";
import { LandingLayoutComponent } from "@components/landing-layout/landing-layout.component";
import { StartupComponent } from "@views/startup/startup.component";

export const VIEWS_ROUTES: Routes = [
  {
    path: '',
    component: StartupComponent
  },
  {
    path: 'landing',
    component: LandingLayoutComponent,
    loadChildren: () => import('./landing-pages/landing-pages.route').then((mod) => mod.LANDING_PAGES_ROUTES)
  }
];