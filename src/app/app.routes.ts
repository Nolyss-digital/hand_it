import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '@views/startup/components/dashboard/admin-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.route').then((mod) => mod.VIEWS_ROUTES)
  },
    { path: 'admin', component: AdminDashboardComponent } // dashboard admin

];
