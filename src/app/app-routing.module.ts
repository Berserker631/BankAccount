import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesLoginComponent } from './Components/employees-login/employees-login.component';
import { LayoutHomeComponent } from './Layouts/layout-home/layout-home.component';
import { GeneralLayoutComponent } from './Layouts/general-layout/general-layout.component';
import { RequestsLayoutComponent } from './Layouts/requests-layout/requests-layout.component';

const routes: Routes = [
  { path: '', component: EmployeesLoginComponent },
  { path: 'homeLayout', component: LayoutHomeComponent },
  { path: 'accountDetail', component: GeneralLayoutComponent },
  { path: 'requestMenu', loadChildren: () => import('./Layouts/requests-layout/RequestRoutingModule').then((x => x.RequestRoutingModule)) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
