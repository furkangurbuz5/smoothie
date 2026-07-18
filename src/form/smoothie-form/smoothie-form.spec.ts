import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieForm } from './smoothie-form';

describe('SmoothieForm', () => {
  let component: SmoothieForm;
  let fixture: ComponentFixture<SmoothieForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmoothieForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SmoothieForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
