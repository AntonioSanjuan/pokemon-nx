import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getIsUILoadedApp, getIsBlockByRequest } from '@gt-motive-app/store';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'gt-motive-app-loading-spinner',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LetDirective
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  private store: Store = inject(Store);

  public isBlockByRequest$ = this.store.select(getIsBlockByRequest)
  public isUILoadedApp$ = this.store.select(getIsUILoadedApp)
}