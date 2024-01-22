import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiModule } from '@gt-motive-app/ui';

@Component({
  selector: 'gt-motive-app-comparison',
  templateUrl: './comparison.component.html',
  imports: [
    UiModule,
  ],
  styleUrls: ['./comparison.component.scss'],
  standalone: true
})
export class ComparisonComponent {
  private store = inject(Store)
}
