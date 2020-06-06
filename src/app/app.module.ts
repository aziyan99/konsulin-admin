import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/**
 * Routing module
 */
import { AppRoutingModule } from './app-routing.module';

/**
 * Base template
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardIndexComponent } from './pages/dashboard/dashboard-index/dashboard-index.component';
import { LecturerIndexComponent } from './pages/lecturer/lecturer-index/lecturer-index.component';
import { LecturerCreateComponent } from './pages/lecturer/lecturer-create/lecturer-create.component';
import { LecturerEditComponent } from './pages/lecturer/lecturer-edit/lecturer-edit.component';
import { StudentIndexComponent } from './pages/student/student-index/student-index.component';
import { StudentCreateComponent } from './pages/student/student-create/student-create.component';
import { StudentEditComponent } from './pages/student/student-edit/student-edit.component';
import { LecturerExpertisesComponent } from './pages/other/lecturer-expertises/lecturer-expertises.component';
import { SettingsComponent } from './pages/other/settings/settings.component';
import { LoaderComponent } from './pages/other/loader/loader.component';

/**
 * Spinner(loading progress)
 */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DashboardIndexComponent,
    LecturerIndexComponent,
    LecturerCreateComponent,
    LecturerEditComponent,
    StudentIndexComponent,
    StudentCreateComponent,
    StudentEditComponent,
    LecturerExpertisesComponent,
    SettingsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
