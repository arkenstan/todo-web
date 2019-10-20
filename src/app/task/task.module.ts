import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TaskMaterial } from '@shared/material/material.module';

import { TaskRoutingModule } from './task-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { taskFeatureKey, reducers } from './reducers';
import { TaskEffects } from './effects/task.effects';

import { TaskPageComponent } from './containers/task-page/task-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { CreateTaskDialogComponent } from './components/create-task-dialog/create-task-dialog.component';

@NgModule({
  declarations: [TaskPageComponent, TaskItemComponent, CreateTaskDialogComponent],
  imports: [
    SharedModule,
    TaskMaterial,
    TaskRoutingModule,
    StoreModule.forFeature(taskFeatureKey, reducers),
    EffectsModule.forFeature([TaskEffects])
  ],
  entryComponents: [CreateTaskDialogComponent]
})
export class TaskModule {}
