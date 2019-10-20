import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule]
})
export class MaterialModule {}

@NgModule({
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class TaskMaterial {}
