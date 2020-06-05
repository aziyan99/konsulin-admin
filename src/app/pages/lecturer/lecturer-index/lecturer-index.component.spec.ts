import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerIndexComponent } from './lecturer-index.component';

describe('LecturerIndexComponent', () => {
  let component: LecturerIndexComponent;
  let fixture: ComponentFixture<LecturerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
