import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChargePointModule } from './charge-point/charge-point.module';
import { OrganizationModule } from './organization/organization.module';

export function loadChargePoint() {
  return ChargePointModule;
}
export function loadOrganization() {
  return OrganizationModule;
}

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'chargePoint', loadChildren: loadChargePoint},
  {path: 'organization', loadChildren: loadOrganization}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
