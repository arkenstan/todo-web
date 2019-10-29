import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@core/core.module';
import { CreateTaskDialogComponent } from './create-task-dialog.component';

describe('CreateTaskDialogComponent', () => {
  let component: CreateTaskDialogComponent;
  let fixture: ComponentFixture<CreateTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CoreModule],
      declarations: [CreateTaskDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
