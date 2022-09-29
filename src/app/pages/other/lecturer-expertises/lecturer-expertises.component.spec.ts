import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerExpertisesComponent } from './lecturer-expertises.component';

describe('LecturerExpertisesComponent', () => {
  let component: LecturerExpertisesComponent;
  let fixture: ComponentFixture<LecturerExpertisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerExpertisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerExpertisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
