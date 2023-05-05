import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricamentoComponent } from './caricamento.component';

describe('CaricamentoComponent', () => {
  let component: CaricamentoComponent;
  let fixture: ComponentFixture<CaricamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaricamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
