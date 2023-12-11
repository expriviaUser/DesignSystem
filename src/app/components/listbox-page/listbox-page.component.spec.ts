import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxPageComponent } from './listbox-page.component';

describe('ListboxPageComponent', () => {
  let component: ListboxPageComponent;
  let fixture: ComponentFixture<ListboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListboxPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
