import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-inplace',
  templateUrl: './inplace.component.html',
  styleUrls: ['./inplace.component.scss'],
})
export class InplaceComponent {
  @Input() isClosable: boolean = false;
  @Input() isActive: boolean = false;
  @Input() externalDisplay!: TemplateRef<any>;
  @Input() externalContent!: TemplateRef<any>;
}
