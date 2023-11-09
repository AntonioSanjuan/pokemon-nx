import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiModule } from '@gt-motive-app/ui';

@Component({
  selector: 'gt-motive-app-account',
  template: '<router-outlet></router-outlet>',
  styles: [':host { height: 100%; }'],
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent {}
