import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesLoginComponent } from './Components/employees-login/employees-login.component';
import { LayoutHomeComponent } from './Layouts/layout-home/layout-home.component';
import { GeneralLayoutComponent } from './Layouts/general-layout/general-layout.component';

const routes: Routes = [
  { path: '', component: EmployeesLoginComponent},
  { path: 'homeLayout', component: LayoutHomeComponent},
  { path: 'accountDetail', component: GeneralLayoutComponent},
  { path: 'requests', component: GeneralLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
