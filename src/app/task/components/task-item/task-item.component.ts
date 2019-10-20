import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, UpdateTask } from '@app/task/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  @Output() taskStatusChange = new EventEmitter<{ taskId: string; updateData: UpdateTask }>();
  @Output() removed = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  markComplete(action) {
    if (action === 'done' && !this.task.completed) {
      this.taskStatusChange.emit({ taskId: this.task._id, updateData: { completed: true } });
    } else if (action === 'undo' && this.task.completed) {
      this.taskStatusChange.emit({ taskId: this.task._id, updateData: { completed: false } });
    }
  }

  removeTask() {
    this.removed.emit(this.task._id);
  }
}
