export interface Task {
  _id: string;
  refId: string;
  completed: boolean;
  content: string;
  createdBy: string;
  createdAt: Date;
  updateAt: Date;
}

export interface UpdateTask {
  content?: string;
  completed?: boolean;
}

export interface CreateTask {
  content: string;
}
