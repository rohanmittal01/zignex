import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomtomMapComponent } from './tomtom-map.component';

describe('TomtomMapComponent', () => {
  let component: TomtomMapComponent;
  let fixture: ComponentFixture<TomtomMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomtomMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomtomMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
