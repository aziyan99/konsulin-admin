import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * menu component
 */
 import { DashboardIndexComponent } from './pages/dashboard/dashboard-index/dashboard-index.component';
 import { LecturerIndexComponent } from './pages/lecturer/lecturer-index/lecturer-index.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardIndexComponent },
  { path: 'dosen', component: LecturerIndexComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
