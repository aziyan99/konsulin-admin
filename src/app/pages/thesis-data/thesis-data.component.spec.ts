import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisDataComponent } from './thesis-data.component';

describe('ThesisDataComponent', () => {
  let component: ThesisDataComponent;
  let fixture: ComponentFixture<ThesisDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
