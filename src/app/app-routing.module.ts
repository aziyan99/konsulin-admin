import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DosenComponent } from './dosen/dosen.component';
import { DosenAddComponent } from 'src/app/dosen-add/dosen-add.component';
import { DosenEditComponent } from 'src/app/dosen-edit/dosen-edit.component';

import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MahasiswaAddComponent } from 'src/app/mahasiswa-add/mahasiswa-add.component';

import { GroupComponent } from './group/group.component';
import { TskripsiComponent } from './tskripsi/tskripsi.component';
import { SkripsiComponent } from './skripsi/skripsi.component';
import { AduanComponent } from './aduan/aduan.component';
import { PengaturanComponent } from './pengaturan/pengaturan.component';
import { ProfileComponent } from './profile/profile.component';

import { LecturerExpertisesComponent } from 'src/app/lecturer-expertises/lecturer-expertises.component';
import { MahasiswaEditComponent } from './mahasiswa-edit/mahasiswa-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dosen', component: DosenComponent },
  { path: 'dosen/create', component: DosenAddComponent },
  { path: 'dosen/:id', component: DosenEditComponent },
  { path: 'mahasiswa', component: MahasiswaComponent },
  { path: 'mahasiswa/create', component: MahasiswaAddComponent },
  { path: 'mahasiswa/:id', component: MahasiswaEditComponent },
  { path: 'group', component: GroupComponent },
  { path: 'template-skripsi', component: TskripsiComponent },
  { path: 'skripsi', component: SkripsiComponent },
  { path: 'aduan', component: AduanComponent },
  { path: 'pengaturan', component: PengaturanComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lecturer-expertises', component: LecturerExpertisesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
