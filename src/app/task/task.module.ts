import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTask from './reducers';
import { TaskPageComponent } from './containers/task-page/task-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';


@NgModule({
  declarations: [TaskPageComponent, TaskItemComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    StoreModule.forFeature(fromTask.taskFeatureKey, fromTask.reducers, { metaReducers: fromTask.metaReducers })
  ]
})
export class TaskModule { }
