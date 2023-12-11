import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() menuBadge: string = '';
}
