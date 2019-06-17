import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ActionComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ActionComponent]
})
export class ActionListModule { }
