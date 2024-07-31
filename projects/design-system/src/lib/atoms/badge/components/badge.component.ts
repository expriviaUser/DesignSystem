import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnChanges {
  @Input() menuBadge: number = 0;
  @Input() severity: 'success' | 'info' | 'warning' | 'danger' = 'danger';
  @Input() icon: boolean = true;

  @Output() badgeClick = new EventEmitter<Event>();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['menuBadge'].currentValue) {
      this.cd.detectChanges();
    }
  }
}
