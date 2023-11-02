import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {AccordionData} from "../models/accordion.model";

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() multiple: boolean = false;
  @Input() index: number | Array<number> | null = null;
  @Input() sections!: AccordionData[];
  @Input() contents!: TemplateRef<any>;

  @Output() indexChange: EventEmitter<number | Array<number>> = new EventEmitter<number | Array<number>>();

  changeIndex(event: number) {
    this.indexChange.emit(event);
  }

}
