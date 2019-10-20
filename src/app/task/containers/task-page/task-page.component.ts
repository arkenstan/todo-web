import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { CreateTaskDialogComponent } from '@app/task/components/create-task-dialog/create-task-dialog.component';
import * as fromTask from '@app/task/reducers';
import { TaskPageActions } from '@app/task/actions';
import { Task, CreateTask, UpdateTask } from '@app/task/models/task.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
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
  createTask(task: CreateTask) {
    this.store.dispatch(TaskPageActions.createTasks({ task }));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, { data: null });
    const globRef = this;
    dialogRef.afterClosed().subscribe(result => {
      if (result.isSubmit) {
        globRef.store.dispatch(TaskPageActions.createTasks({ task: result.data }));
      }
    });
  }
}
