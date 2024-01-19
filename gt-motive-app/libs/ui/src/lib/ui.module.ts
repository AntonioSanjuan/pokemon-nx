import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetDirective, PushPipe } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { IntersectionObserverDirective } from './directives/intersectionObserver/intersection-observer.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

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
    MatCardModule,
    MatSnackBarModule

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
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule
  ]
})
export class UiModule {}
