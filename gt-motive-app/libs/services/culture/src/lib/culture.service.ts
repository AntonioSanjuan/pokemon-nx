import { Injectable, inject } from "@angular/core";
import { TranslateService } from '@ngx-translate/core'
import { AppInit, loadedApp } from '@gt-motive-app/store'
import { Store } from '@ngrx/store'
import { first } from "rxjs";

@Injectable()
export class CultureService {
    private readonly defaultLangCode: string = "ES-ES"
    private translateService: TranslateService = inject(TranslateService)
    private store: Store = inject(Store)

    private readonly acceptedLanguages: string[] = [
        'CA-ES', 'CS-CZ', 'DA-DK', 'DE-DE', 'DE-AT', 'DE-CH', 'EL-GR', 'EN-GB', 'EN-IE', 'EN-IN', 'EN-ZA',
        'ES-ES', 'ES-CO', 'ES-MX', 'FI-FI', 'FR-FR', 'FR-CH', 'FR-TN', 'IT-IT', 'KO-KR', 'NL-NL',
        'NL-BE', 'NN-NO', 'PT-PT', 'RO-RO', 'SK-SK', 'SV-SE', 'TR-TR', 'PL-PL', 'HU-HU'
      ];
      
    public changeLanguage(lang: string) {
        const cultureLang = this.getLangCode(lang);
        this.setCulture(cultureLang);
    }

    public setLanguage(): void {
        this.translateService.setDefaultLang(this.defaultLangCode);
        const browserLang: string | undefined = this.translateService.getBrowserCultureLang();
        this.changeLanguage(browserLang || this.defaultLangCode)
    }

    private getLangCode(cultureCode: string): string {
        const langCode = this.acceptedLanguages.find(lang => lang === cultureCode.toUpperCase());
        return langCode || this.defaultLangCode;
    }

    private setCulture(cultureName: string) {
        this.translateService.use(this.getLangCode(cultureName)).pipe(first())
        .subscribe(() => this.store.dispatch(loadedApp({ initialized: AppInit.UI })));
    }
}