import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoprrBodyComponent } from './doprr-body.component';

describe('DoprrBodyComponent', () => {
  let component: DoprrBodyComponent;
  let fixture: ComponentFixture<DoprrBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoprrBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoprrBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
