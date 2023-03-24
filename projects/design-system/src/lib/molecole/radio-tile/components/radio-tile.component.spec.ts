import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTileComponent } from './radio-tile.component';

describe('RadioTileComponent', () => {
  let component: RadioTileComponent;
  let fixture: ComponentFixture<RadioTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
