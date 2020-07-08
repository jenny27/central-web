import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChargePointModule } from './charge-point/charge-point.module';

export function loadChargePoint(){
  return ChargePointModule;
}
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'chargePoint', loadChildren: loadChargePoint}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
