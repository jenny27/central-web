import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';


const routes: Routes = [
  {path: '', component: OrganizationHomeComponent},
  {path: ':id', component: OrganizationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
