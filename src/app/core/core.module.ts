import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/material/material.module';

import { AppComponent } from '@core/containers/app-component/app.component';
import { CreateTaskDialogComponent } from '@core/components/create-task-dialog/create-task-dialog.component';

@NgModule({
  declarations: [AppComponent, CreateTaskDialogComponent],
  imports: [SharedModule, RouterModule, MaterialModule],
  entryComponents: [CreateTaskDialogComponent]
})
export class CoreModule {}
