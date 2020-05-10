import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosenAddComponent } from './dosen-add.component';

describe('DosenAddComponent', () => {
  let component: DosenAddComponent;
  let fixture: ComponentFixture<DosenAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosenAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
