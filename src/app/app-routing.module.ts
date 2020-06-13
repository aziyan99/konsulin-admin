import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * menu component
 */
import { LecturerExpertisesComponent } from './pages/other/lecturer-expertises/lecturer-expertises.component';
import { DashboardIndexComponent } from './pages/dashboard/dashboard-index/dashboard-index.component';
import { LecturerIndexComponent } from './pages/lecturer/lecturer-index/lecturer-index.component';
import { LecturerCreateComponent } from './pages/lecturer/lecturer-create/lecturer-create.component';
import { LecturerEditComponent } from './pages/lecturer/lecturer-edit/lecturer-edit.component';
import { StudentIndexComponent } from './pages/student/student-index/student-index.component';
import { StudentCreateComponent } from './pages/student/student-create/student-create.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { ThesisTemplateComponent } from './pages/other/thesis-template/thesis-template.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardIndexComponent },
  { path: 'dosen', component: LecturerIndexComponent },
  { path: 'dosen/create', component: LecturerCreateComponent },
  { path: 'dosen/edit/:id', component: LecturerEditComponent },
  { path: 'mahasiswa', component: StudentIndexComponent },
  { path: 'mahasiswa/create', component: StudentCreateComponent },
  { path: 'mahasiswa/edit/:id', component: StudentEditComponent },
  { path: 'bidangpenelitian', component: LecturerExpertisesComponent },
  { path: 'templateskripsi', component: ThesisTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
