import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerCreateComponent } from './lecturer-create.component';

describe('LecturerCreateComponent', () => {
  let component: LecturerCreateComponent;
  let fixture: ComponentFixture<LecturerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
