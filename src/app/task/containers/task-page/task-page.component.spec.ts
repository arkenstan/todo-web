import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModule } from '@app/task/task.module';
import { TaskItemComponent } from '@app/task/components/task-item/task-item.component';
import { TaskPageComponent } from './task-page.component';

describe('TaskPageComponent', () => {
  let component: TaskPageComponent;
  let fixture: ComponentFixture<TaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TaskModule],
      declarations: [TaskItemComponent, TaskPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
