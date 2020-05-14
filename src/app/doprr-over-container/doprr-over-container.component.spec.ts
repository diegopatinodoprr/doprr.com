import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoprrOverContainerComponent } from './doprr-over-container.component';

describe('DoprrOverContainerComponent', () => {
  let component: DoprrOverContainerComponent;
  let fixture: ComponentFixture<DoprrOverContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoprrOverContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoprrOverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
