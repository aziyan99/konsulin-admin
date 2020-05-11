import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaEditComponent } from './mahasiswa-edit.component';

describe('MahasiswaEditComponent', () => {
  let component: MahasiswaEditComponent;
  let fixture: ComponentFixture<MahasiswaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
