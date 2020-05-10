import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DosenComponent } from './dosen/dosen.component';
import { DosenAddComponent } from 'src/app/dosen-add/dosen-add.component';

import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { GroupComponent } from './group/group.component';
import { TskripsiComponent } from './tskripsi/tskripsi.component';
import { SkripsiComponent } from './skripsi/skripsi.component';
import { AduanComponent } from './aduan/aduan.component';
import { PengaturanComponent } from './pengaturan/pengaturan.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dosen', component: DosenComponent },
  { path: 'dosen-add', component: DosenAddComponent },
  { path: 'mahasiswa', component: MahasiswaComponent },
  { path: 'group', component: GroupComponent },
  { path: 'template-skripsi', component: TskripsiComponent },
  { path: 'skripsi', component: SkripsiComponent },
  { path: 'aduan', component: AduanComponent },
  { path: 'pengaturan', component: PengaturanComponent },
  { path: 'profile', component: ProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
