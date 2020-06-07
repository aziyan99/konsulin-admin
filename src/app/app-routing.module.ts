import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * menu component
 */
import { LecturerExpertisesComponent } from './pages/other/lecturer-expertises/lecturer-expertises.component';
import { DashboardIndexComponent } from './pages/dashboard/dashboard-index/dashboard-index.component';
import { LecturerIndexComponent } from './pages/lecturer/lecturer-index/lecturer-index.component';
import { LecturerCreateComponent } from './pages/lecturer/lecturer-create/lecturer-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardIndexComponent },
  { path: 'dosen', component: LecturerIndexComponent },
  { path: 'dosen/create', component: LecturerCreateComponent },
  { path: 'bidangpenelitian', component: LecturerExpertisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
