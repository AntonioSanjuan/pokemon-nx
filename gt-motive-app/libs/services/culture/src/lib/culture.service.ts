import { inject } from "@angular/core";
import { TranslateService } from '@ngx-translate/core'

export class CultureService {
    private readonly defaultLangCode: string = "ES-ES"
    private translateService: TranslateService = inject(TranslateService)

    public setLanguage(): void {
        console.log("setLang")
        this.translateService.setDefaultLang(this.defaultLangCode);
        const browserLang = this.translateService.getBrowserCultureLang();
    }

    private setCulture(cultureName: string) {
    }
}