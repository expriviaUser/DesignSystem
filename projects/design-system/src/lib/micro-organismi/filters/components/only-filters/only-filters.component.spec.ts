import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyFiltersComponent } from './only-filters.component';

describe('OnlyFiltersComponent', () => {
  let component: OnlyFiltersComponent;
  let fixture: ComponentFixture<OnlyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
