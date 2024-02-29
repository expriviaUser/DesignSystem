import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {PageEvent} from "../models/paginator.model";


@Component({
  selector: 'lib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() first: number = 0;
  @Input() rows: number = 10;
  @Input() totalRecords: number = 20;
  @Input() showCurrentPageReport: boolean = true;
  @Input() rowsPerPageOptions!: number[];
  @Input() currentPageReportTemplate: string = '{first} - {last} of {totalRecords}';

  @Output() onPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  onPageChangeEmit(event: PageEvent) {
    this.onPageChange.emit(event);
  }

}
