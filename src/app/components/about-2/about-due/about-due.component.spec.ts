import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDueComponent } from './about-due.component';

describe('AboutDueComponent', () => {
  let component: AboutDueComponent;
  let fixture: ComponentFixture<AboutDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
