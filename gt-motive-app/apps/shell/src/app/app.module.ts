import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { AuthenticateGuard } from './core/auth-guard.service';
import { UiEffects } from '@gt-motive-app/store';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    MenuBottomComponent,
    HomeComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
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
      UiEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
  ],
  providers: [
    AuthenticateGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
