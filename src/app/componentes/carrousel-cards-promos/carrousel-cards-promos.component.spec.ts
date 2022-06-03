import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselCardsPromosComponent } from './carrousel-cards-promos.component';

describe('CarrouselCardsPromosComponent', () => {
  let component: CarrouselCardsPromosComponent;
  let fixture: ComponentFixture<CarrouselCardsPromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselCardsPromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselCardsPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
