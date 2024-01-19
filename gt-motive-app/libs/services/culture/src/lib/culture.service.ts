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

    private readonly acceptedLanguages: string[] = [ 'EN-GB', 'ES-ES' ];
      
    public changeLanguage(lang: string) {
        const cultureLang = this.getLangCode(lang);
        this.setCulture(cultureLang);
    }

    public setLanguage(): void {
        this.translateService.setDefaultLang(this.defaultLangCode);
        this.translateService.addLangs(this.acceptedLanguages)
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