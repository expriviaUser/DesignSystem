import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTilePageComponent } from './radio-tile-page.component';

describe('RadioTilePageComponent', () => {
  let component: RadioTilePageComponent;
  let fixture: ComponentFixture<RadioTilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioTilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioTilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
