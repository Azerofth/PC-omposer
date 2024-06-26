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
import { HttpClientModule } from '@angular/common/http';
import { StepperModule } from 'primeng/stepper';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';


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
import { PromptComponent } from './prompt/prompt.component';


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
    LogoutComponent,
    PromptComponent


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
    HttpClientModule,
    StepperModule,
    CarouselModule,
    ImageModule,
    TabMenuModule,
    ToastModule,
    TableModule,
    RatingModule,
    MessagesModule,
    ProgressBarModule,
    MultiSelectModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent }])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
