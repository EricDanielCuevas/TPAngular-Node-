import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselCards2Component } from './carrousel-cards2.component';

describe('CarrouselCards2Component', () => {
  let component: CarrouselCards2Component;
  let fixture: ComponentFixture<CarrouselCards2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselCards2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselCards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
