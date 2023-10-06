import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'
@Component({
  selector: 'gt-motive-app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss', './../menu.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule
  ]
})
export class MenuTopComponent {}
