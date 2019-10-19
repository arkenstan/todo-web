import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TaskRoutingModule } from './task-routing.module';
import { StoreModule } from '@ngrx/store';
import { taskFeatureKey, reducers } from './reducers';
import { TaskPageComponent } from './containers/task-page/task-page.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
	declarations: [ TaskPageComponent, TaskItemComponent ],
	imports: [ SharedModule, TaskRoutingModule, StoreModule.forFeature(taskFeatureKey, reducers) ]
})
export class TaskModule {}
