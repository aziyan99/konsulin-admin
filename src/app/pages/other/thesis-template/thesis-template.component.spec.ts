import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisTemplateComponent } from './thesis-template.component';

describe('ThesisTemplateComponent', () => {
  let component: ThesisTemplateComponent;
  let fixture: ComponentFixture<ThesisTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
