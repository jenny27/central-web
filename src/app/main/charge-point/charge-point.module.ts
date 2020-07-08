import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargePointRoutingModule } from './charge-point-routing.module';
import { ChargePointHomeComponent } from './charge-point-home/charge-point-home.component';
import { ChargePointDetailComponent } from './charge-point-detail/charge-point-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatTooltipModule, MatButtonModule, MatInputModule, MatDialogModule, MatSelect, MatSelectModule,
   MatOptionModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [ChargePointHomeComponent, ChargePointDetailComponent],
  imports: [
    CommonModule,
    ChargePointRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
  ]
})
export class ChargePointModule { }
