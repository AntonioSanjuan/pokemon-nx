import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gt-motive-app-account',
  template: '<router-outlet></router-outlet>',
  styles: [':host { height: 100%; }'],
  imports: [RouterOutlet],
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true
})
export class AppComponent {}
