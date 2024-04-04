import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PartspickerComponent } from './pcbuilder/partspicker/partspicker.component';
import { AdventurebuildComponent } from './pcbuilder/adventurebuild/adventurebuild.component';
import { PcbuilderhomeComponent } from './pcbuilder/pcbuilderhome/pcbuilderhome.component';
import { LoginComponent } from './accounts/login/login.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { RegistrationComponent } from './accounts/registration/registration.component';


const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'pcbuilderhome', component: PcbuilderhomeComponent},
  { path: 'partspicker', component: PartspickerComponent},
  { path: 'adventurebuild', component: AdventurebuildComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
