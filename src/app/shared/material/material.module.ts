import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule]
})
export class MaterialModule {}
