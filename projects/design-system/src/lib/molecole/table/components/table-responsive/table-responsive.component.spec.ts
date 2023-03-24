import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResponsiveComponent } from './table-responsive.component';

describe('PanelAccordionComponent', () => {
  let component: TableResponsiveComponent;
  let fixture: ComponentFixture<TableResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
