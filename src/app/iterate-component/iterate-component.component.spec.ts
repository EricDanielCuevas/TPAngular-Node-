import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateComponentComponent } from './iterate-component.component';

describe('IterateComponentComponent', () => {
  let component: IterateComponentComponent;
  let fixture: ComponentFixture<IterateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
