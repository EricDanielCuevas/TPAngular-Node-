import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGolosinaComponent } from './buscar-golosina.component';

describe('BuscarGolosinaComponent', () => {
  let component: BuscarGolosinaComponent;
  let fixture: ComponentFixture<BuscarGolosinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarGolosinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarGolosinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
