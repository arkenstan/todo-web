import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LandingMaterial } from '@shared/material/material.module';

import { LandingRoutingModule } from './landing-routing.module';
import { MainComponent } from './containers/main/main.component';
import { StoreModule } from '@ngrx/store';
import * as fromLanding from './reducers';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, LandingRoutingModule, LandingMaterial, StoreModule.forFeature(fromLanding.landingFeatureKey, fromLanding.reducers, { metaReducers: fromLanding.metaReducers })]
})
export class LandingModule {}
