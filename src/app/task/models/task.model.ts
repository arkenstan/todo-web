export interface Task {
	taskId: string;
	completed: boolean;
	title: string;
	owner: string;
}

export interface CreateTask {
	title: string;
}
