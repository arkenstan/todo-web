import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LandingMaterial } from '@shared/material/material.module';

import { LandingRoutingModule } from './landing-routing.module';
import { MainComponent } from './containers/main/main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, landingFeatureKey } from './reducers';
import { ListEffects } from './effects/list.effects';

@NgModule({
	declarations: [ MainComponent ],
	imports: [
		SharedModule,
		LandingRoutingModule,
		LandingMaterial,
		StoreModule.forFeature(landingFeatureKey, reducers),
		EffectsModule.forFeature([ ListEffects ])
	]
})
export class LandingModule {}
