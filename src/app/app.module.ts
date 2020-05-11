import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DosenComponent } from './dosen/dosen.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { GroupComponent } from './group/group.component';
import { PengaturanComponent } from './pengaturan/pengaturan.component';
import { AduanComponent } from './aduan/aduan.component';
import { TskripsiComponent } from './tskripsi/tskripsi.component';
import { SkripsiComponent } from './skripsi/skripsi.component';
import { ProfileComponent } from './profile/profile.component';
import { DosenAddComponent } from './dosen-add/dosen-add.component';
import { LecturerExpertisesComponent } from './lecturer-expertises/lecturer-expertises.component';
import { MahasiswaAddComponent } from './mahasiswa-add/mahasiswa-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    DosenComponent,
    MahasiswaComponent,
    GroupComponent,
    PengaturanComponent,
    AduanComponent,
    TskripsiComponent,
    SkripsiComponent,
    ProfileComponent,
    DosenAddComponent,
    LecturerExpertisesComponent,
    MahasiswaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
