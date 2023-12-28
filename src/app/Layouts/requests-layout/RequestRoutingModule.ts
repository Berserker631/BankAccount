import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { OptionMenuComponent } from "../../Components/option-menu/option-menu.component";
import { RequestsLayoutComponent } from "../../Layouts/requests-layout/requests-layout.component";
import { RequestsComponent } from "src/app/Components/requests/requests.component";

const routes: Routes = [{
  path: '',
  component: RequestsLayoutComponent,
  children: [
    {
      path: '',
      component: OptionMenuComponent
    },
    {
      path: 'requestHistory',
      component: RequestsComponent
    },
  ]
  // path: 'requests',
  // outlet: 'requestLayout',
  // children: [{
  //   path: '',
  //   component: OptionMenuComponent
  // }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RequestRoutingModule { }
