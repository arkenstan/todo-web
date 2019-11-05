import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import * as fromTask from '@app/task/reducers';
import * as fromTaskApi from '@app/task/reducers/task-api.reducer';
import * as fromTaskPage from '@app/task/reducers/task-page.reducer';

import { SharedModule } from '@shared/shared.module';
import { TaskMaterial } from '@shared/material/material.module';
import { TaskItemComponent } from '@app/task/components/task-item/task-item.component';
import { TaskPageComponent } from './task-page.component';

describe('TaskPageComponent', () => {
  let component: TaskPageComponent;
  let fixture: ComponentFixture<TaskPageComponent>;
  let store: MockStore<fromTask.State>;

  const initialState = {
    task: {
      taskPage: {} as fromTaskPage.State,
      taskApi: {} as fromTaskApi.State
    }
  } as fromTask.State;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      imports: [BrowserModule, BrowserAnimationsModule, SharedModule, TaskMaterial],
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
