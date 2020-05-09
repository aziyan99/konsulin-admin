import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TskripsiComponent } from './tskripsi.component';

describe('TskripsiComponent', () => {
  let component: TskripsiComponent;
  let fixture: ComponentFixture<TskripsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TskripsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TskripsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
