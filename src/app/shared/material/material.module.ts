import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule]
})
export class MaterialModule {}

@NgModule({
  exports: [MatSelectModule, MatCheckboxModule]
})
export class LandingMaterial {}
