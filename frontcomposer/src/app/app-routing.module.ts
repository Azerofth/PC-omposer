import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { PcbuilderComponent } from './pcbuilder/pcbuilder.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'pcbuilder', component: PcbuilderComponent},
  { path: 'registration', component: RegistrationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
