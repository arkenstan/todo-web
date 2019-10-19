import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FeathersService } from '@core/services/feathers.service';

import { Task, CreateTask } from '../models/task.model';

@Injectable({
	providedIn: 'root'
})
export class TaskService {
	SERVICE_NAME = 'clientApi/v1.0/task';

	constructor(private feathers: FeathersService) {}

	loadTasks(): Observable<any> {
		return (this.feathers.service(this.SERVICE_NAME) as any).watch().find();
	}

	addNewTask(task: CreateTask): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).create(task);
	}

	updateTask(taskId: string, task: Task): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).patch(taskId, task);
	}

	deleteTask(taskId: string): Promise<any> {
		return this.feathers.service(this.SERVICE_NAME).remove(taskId);
	}
}
