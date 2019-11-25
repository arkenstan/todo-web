import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared.module';
import { Task } from '@app/task/models/task.model';
import { TaskMaterial } from '@shared/material/material.module';
import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, BrowserAnimationsModule, SharedModule, TaskMaterial],
      declarations: [TaskItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    let expectedTask: Task = {
      _id: 'task_id',
      refId: 'task_ref_id',
      completed: false,
      content: 'Task 1 Title',
      createdBy: 'user_id_slug',
      createdAt: new Date(),
      updateAt: new Date()
    };
    component.task = expectedTask;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
