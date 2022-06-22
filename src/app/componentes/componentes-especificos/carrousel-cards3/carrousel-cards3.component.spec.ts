import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselCards3Component } from './carrousel-cards3.component';

describe('CarrouselCards3Component', () => {
  let component: CarrouselCards3Component;
  let fixture: ComponentFixture<CarrouselCards3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselCards3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselCards3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
