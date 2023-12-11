import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tagLabel: string = '';
  @Input() tagSeverity: string = '';
  @Input() tagRounded: boolean = false;
  @Input() tagIcon: string = '';
  @Input() tagStyleClass: string = '';
  @Input() tagStyle: object = {};

  constructor() { }
}
