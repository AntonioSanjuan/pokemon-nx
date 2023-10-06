import { Component, OnInit } from '@angular/core';
import { inject } from "@angular/core"
import { CultureService } from "@gt-motive-app/libs/services/culture"

@Component({
  selector: 'gt-motive-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private cultureService: CultureService = inject(CultureService)
  title = 'shell';

  ngOnInit(): void {
      this.cultureService.setLanguage()
  }
}
