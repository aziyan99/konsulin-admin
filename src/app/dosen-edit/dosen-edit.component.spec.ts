import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenEditComponent } from './dosen-edit.component';

describe('DosenEditComponent', () => {
  let component: DosenEditComponent;
  let fixture: ComponentFixture<DosenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
