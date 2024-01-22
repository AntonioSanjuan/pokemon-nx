import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gt-motive-app-comparison',
  template: '<router-outlet></router-outlet>',
  styles: [':host { height: 100%; }'],
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent {}
