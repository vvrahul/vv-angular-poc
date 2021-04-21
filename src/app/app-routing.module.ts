
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
const DashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'dashboard', loadChildren: DashboardModule, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
