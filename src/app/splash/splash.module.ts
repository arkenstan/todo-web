import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashRoutingModule } from './splash-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplashRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers, { metaReducers: fromAuth.metaReducers })
  ]
})
export class SplashModule { }