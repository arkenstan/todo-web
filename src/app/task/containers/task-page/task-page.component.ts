import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromTask from '@app/task/reducers';
import { TaskPageActions } from '@app/task/actions';
import { UpdateTask } from '@app/task/models/task.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskPageComponent implements OnInit {
  hasError = this.store.pipe(select(fromTask.selectTaskPageError));
  isPending = this.store.pipe(select(fromTask.selectTaskPagePending));
  inCompletedTasks = this.store.pipe(select(fromTask.selectInCompletedTask));
  completedTasks = this.store.pipe(select(fromTask.selectCompletedTask));

  constructor(private store: Store<fromTask.State>, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(TaskPageActions.loadTasks());
  }

  updateTask(dataObj: { taskId: string; updateData: UpdateTask }) {
    this.store.dispatch(
      TaskPageActions.updateTask({ taskId: dataObj.taskId, task: dataObj.updateData })
    );
  }
  deleteTask(taskId: string) {
    this.store.dispatch(TaskPageActions.removeTask({ taskId }));
  }
}
