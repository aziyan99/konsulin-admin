import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaturanComponent } from './pengaturan.component';

describe('PengaturanComponent', () => {
  let component: PengaturanComponent;
  let fixture: ComponentFixture<PengaturanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengaturanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
