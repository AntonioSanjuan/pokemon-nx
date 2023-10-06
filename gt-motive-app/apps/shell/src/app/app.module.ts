import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, rootInitialState } from './store/reducers';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuBottomComponent } from './menu/menu-bottom/menu-bottom.component';
import { CoreModule } from './core/core.module';
import { AuthenticateGuard } from './core/auth-guard.service';
import { UiEffects, RequestEffects } from '@gt-motive-app/store';
import { TranslateModule } from '@ngx-translate/core'
import { LibsServicesCultureModule } from '@gt-motive-app/libs/services/culture';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LibsServicesCultureModule,
    CoreModule,
    TranslateModule,
    MenuBottomComponent,
    MenuTopComponent,
    LoadingSpinnerComponent,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(reducers, {
      initialState: rootInitialState,
      metaReducers: [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot([
      UiEffects,
      RequestEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],
  providers: [
    AuthenticateGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
