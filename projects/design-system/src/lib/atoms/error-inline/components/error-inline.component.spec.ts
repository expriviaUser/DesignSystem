import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInlineComponent } from './error-inline.component';

describe('ErrorInlineComponent', () => {
  let component: ErrorInlineComponent;
  let fixture: ComponentFixture<ErrorInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
