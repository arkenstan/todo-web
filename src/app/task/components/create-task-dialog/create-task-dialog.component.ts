import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CreateTask } from '@app/task/models/task.model';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {
  taskForm = this.fb.group({
    content: ['', Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  createTask(): void {
    if (this.taskForm.valid) {
      this.dialogRef.close({ isSubmit: true, data: this.taskForm.value });
    }
  }

  onNoClick(): void {
    this.dialogRef.close({ isSubmit: false });
  }
}
