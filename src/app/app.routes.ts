import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '@views/startup/components/dashboard/admin-dashboard.component';
import { LoginComponent } from '@views/startup/components/dashboard/Login/login.component';
import { adminGuard } from '@views/startup/components/dashboard/Login/admin.guard';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.route').then((mod) => mod.VIEWS_ROUTES)
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [adminGuard] }

];
