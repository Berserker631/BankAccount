import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesLoginComponent } from './Components/employees-login/employees-login.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RequestsComponent } from './Components/requests/requests.component';
import { FooterHomeComponent } from './Components/footer-home/footer-home.component';
import { HeaderHomeComponent } from './Components/header-home/header-home.component';
import { LayoutHomeComponent } from './Layouts/layout-home/layout-home.component';
import { GeneralLayoutComponent } from './Layouts/general-layout/general-layout.component';
import { FooterGeneralComponent } from './Components/footer-general/footer-general.component';
import { HeaderGeneralComponent } from './Components/header-general/header-general.component';
import { OptionMenuComponent } from './Components/option-menu/option-menu.component';
import { RequestsLayoutComponent } from './Layouts/requests-layout/requests-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesLoginComponent,
    EmployeeHomeComponent,
    EmployeeDetailsComponent,
    RequestsComponent,
    FooterHomeComponent,
    HeaderHomeComponent,
    LayoutHomeComponent,
    GeneralLayoutComponent,
    FooterGeneralComponent,
    HeaderGeneralComponent,
    OptionMenuComponent,
    RequestsLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
