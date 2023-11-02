import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class UiModule {}
