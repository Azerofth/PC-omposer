import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//Angular modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';

//Website components
import { AdventurebuildComponent } from './pcbuilder/adventurebuild/adventurebuild.component';
import { PartspickerComponent } from './pcbuilder/partspicker/partspicker.component';
import { PcbuilderhomeComponent } from './pcbuilder/pcbuilderhome/pcbuilderhome.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegistrationComponent } from './accounts/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './accounts/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PcbuilderhomeComponent,
    AdventurebuildComponent,
    PartspickerComponent,
    RegistrationComponent,
    LogoutComponent


  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule,
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    DataViewModule,
    PaginatorModule,
    RatingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
