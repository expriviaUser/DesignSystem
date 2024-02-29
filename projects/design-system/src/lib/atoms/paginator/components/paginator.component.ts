import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "../models/paginator.model";


@Component({
  selector: 'lib-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{

  @Input() first: number = 0;
  @Input() rows: number = 10;
  @Input() totalRecords: number = 20;
  @Input() showCurrentPageReport: boolean = true;
  @Input() rowsPerPageOptions!: number[];
  @Input() currentPageReportTemplate: string = '{first} - {last} of {totalRecords}';

  protected innerFirst: number = 0;
  protected innerRows: number = 10;

  @Output() onPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();


  ngOnInit(){
    this.innerFirst=this.first;
    this.innerRows=this.rows;
  }

  onPageChangeEmit(event: PageEvent) {
    this.innerFirst = event.first;
    this.innerRows = event.rows;
    this.onPageChange.emit(event);
  }

}
