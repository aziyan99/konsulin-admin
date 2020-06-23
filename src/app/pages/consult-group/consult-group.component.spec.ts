import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultGroupComponent } from './consult-group.component';

describe('ConsultGroupComponent', () => {
  let component: ConsultGroupComponent;
  let fixture: ComponentFixture<ConsultGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
