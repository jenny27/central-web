import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatTooltipModule, MatButtonModule, MatInputModule, MatDialogModule, MatSelect, MatSelectModule,
   MatOptionModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [OrganizationDetailComponent, OrganizationHomeComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
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
export class OrganizationModule { }
