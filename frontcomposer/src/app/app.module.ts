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

//Website components
import { PartslistComponent } from './pcbuilder/partslist/partslist.component';
import { PartspickerComponent } from './pcbuilder/partspicker/partspicker.component';
import { PcbuilderhomeComponent } from './pcbuilder/pcbuilderhome/pcbuilderhome.component';
import { LoginComponent } from './accounts/login/login.component';
import { RegistrationComponent } from './accounts/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PcbuilderhomeComponent,
    PartslistComponent,
    PartspickerComponent,
    RegistrationComponent


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
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
