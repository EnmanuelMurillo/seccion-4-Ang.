import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba02Component } from './prueba02.component';

describe('Prueba02Component', () => {
  let component: Prueba02Component;
  let fixture: ComponentFixture<Prueba02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueba02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueba02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
