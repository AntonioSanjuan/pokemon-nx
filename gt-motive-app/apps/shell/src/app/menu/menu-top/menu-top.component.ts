import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'
@Component({
  selector: 'gt-motive-app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss', './../menu.scss'],
  standalone: true,
  imports: [
    TranslateModule
  ]
})
export class MenuTopComponent {}
