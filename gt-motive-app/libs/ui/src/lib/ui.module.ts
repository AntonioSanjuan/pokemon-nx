import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetDirective, PushPipe } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { IntersectionObserverDirective } from './directives/intersection-observer.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { collapseAnimation } from './animations/collapse/collapse.animation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LetDirective,
    PushPipe,
    ReactiveFormsModule,
    TranslateModule,
    IntersectionObserverDirective,
    MatPaginatorModule,
    MatCardModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LetDirective,
    PushPipe,
    ReactiveFormsModule,
    TranslateModule,
    IntersectionObserverDirective,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class UiModule {}
