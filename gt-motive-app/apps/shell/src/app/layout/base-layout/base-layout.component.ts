import { Component } from '@angular/core';
import { MenuTopComponent } from '../common/menu-top/menu-top.component';
import { MenuBottomComponent } from '../common/menu-bottom/menu-bottom.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gt-motive-app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  imports: [
    RouterOutlet,
    MenuBottomComponent,
    MenuTopComponent,
  ],
  standalone: true
})
export class BaseLayoutComponent {}
