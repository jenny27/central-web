import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargePointHomeComponent } from './charge-point-home/charge-point-home.component';
import { ChargePointDetailComponent } from './charge-point-detail/charge-point-detail.component';


const routes: Routes = [
  {path: '', component: ChargePointHomeComponent},
  {path: ':id', component: ChargePointDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargePointRoutingModule { }
