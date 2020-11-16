import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlickgridComponent } from './slickgrid.component';

describe('SlickgridComponent', () => {
  let component: SlickgridComponent;
  let fixture: ComponentFixture<SlickgridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlickgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
