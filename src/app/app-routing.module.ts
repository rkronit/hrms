import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'account',
    component:AccountDetailsComponent 
  },
  {
    path:'my-order',
    component:MyOrderComponent
  },
  {
    path:'help',
    component:HelpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
