import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';

import { TaskService } from '@app/task/services/task.service';
import { TaskPageActions, TaskApiActions } from '../actions';
import { ToolbarActions } from '@core/actions';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskPageActions.loadTasks.type),
      switchMap(() => this.taskService.loadTasks()),
      map((res: any) => TaskApiActions.loadTasksSuccess({ tasks: res.data })),
      catchError(error => of(TaskApiActions.loadTasksFailure({ error })))
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToolbarActions.createTask.type),
      switchMap(({ task }) => this.taskService.addNewTask(task)),
      map(task => TaskApiActions.createTaskSuccess({ task })),
      catchError(error => of(TaskApiActions.createTaskFailure({ error })))
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskPageActions.updateTask.type),
      switchMap(({ taskId, task }) => this.taskService.updateTask(taskId, task)),
      map(task => TaskApiActions.updateTaskSuccess({ task })),
      catchError(error => of(TaskApiActions.updateTaskFailure({ error })))
    )
  );

  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskPageActions.removeTask.type),
      switchMap(({ taskId }) => this.taskService.deleteTask(taskId)),
      map(task => TaskApiActions.deleteTaskSuccess({ task })),
      catchError(error => of(TaskApiActions.deleteTaskFailure({ error })))
    )
  );
}
