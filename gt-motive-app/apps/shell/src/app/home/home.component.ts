import { Component } from '@angular/core';
import { UiModule } from '@gt-motive-app/ui';

@Component({
  selector: 'gt-motive-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[
    UiModule
  ],
  standalone: true
})
export class HomeComponent {}
