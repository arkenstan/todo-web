import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { SplashRoutingModule } from './splash-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromSplash from './reducers';
import { LoginEffects } from './effects/login.effects';
import { RegisterEffects } from './effects/register.effects';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterPageComponent
  ],
  imports: [
    SharedModule,
    SplashRoutingModule,
    StoreModule.forFeature(fromSplash.splashFeatureKey, fromSplash.reducers),
    EffectsModule.forFeature([LoginEffects, RegisterEffects])
  ]
})
export class SplashModule {}
