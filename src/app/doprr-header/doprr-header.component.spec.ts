import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoprrHeaderComponent } from './doprr-header.component';

describe('DoprrHeaderComponent', () => {
  let component: DoprrHeaderComponent;
  let fixture: ComponentFixture<DoprrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoprrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoprrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
