import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() menuBadge: string = '';
  @Input() severity: 'success' | 'info' | 'warning' | 'danger' = 'danger';
  @Input() icon: boolean = true;
}
