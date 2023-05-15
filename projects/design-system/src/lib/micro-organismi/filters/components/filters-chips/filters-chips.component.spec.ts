import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersChipsComponent } from './filters-chips.component';

describe('FiltersChipsComponent', () => {
  let component: FiltersChipsComponent;
  let fixture: ComponentFixture<FiltersChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
