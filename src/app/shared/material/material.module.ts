import { NgModule } from "@angular/core";
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
  MatDialogModule,
  MatCardModule,
  MatTooltipModule
} from "@angular/material";

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}

@NgModule({
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule
  ]
})
export class TaskMaterial {}
