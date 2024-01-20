import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gt-motive-app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss', './../menu.scss'],
  imports: [
    TranslateModule,
  ],
  standalone: true,
})
export class MenuBottomComponent {}
