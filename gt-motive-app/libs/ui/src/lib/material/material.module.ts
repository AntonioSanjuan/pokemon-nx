import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const modules = [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
  })
  export class MaterialModule {}
  