import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule, 
    MatToolbarModule,
    RouterModule
  ], 
  exports:[NavigationBarComponent]
})
export class SharedModule { }
