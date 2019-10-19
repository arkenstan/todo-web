import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';

import { TaskService } from '@app/task/services/task.service';
import { TaskPageActions, TaskApiActions } from '../actions';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
	constructor(private actions$: Actions, private taskService: TaskService) {}

	loadTasks$ = createEffect(() =>
		this.actions$.pipe(
			ofType(TaskPageActions.loadTasks.type),
			exhaustMap(() => this.taskService.loadTasks()),
			map((res) => TaskApiActions.loadTasksSuccess({ tasks: res.data })),
			catchError((error) => of(TaskApiActions.loadTasksFailure({ error })))
		)
	);

	createTask$ = createEffect(() =>
		this.actions$.pipe(
			ofType(TaskPageActions.createTasks.type),
			switchMap(({ task }) => this.taskService.addNewTask(task)),
			map((task) => TaskApiActions.createTaskSuccess({ task })),
			catchError((error) => of(TaskApiActions.createTaskFailure({ error })))
		)
	);
}
