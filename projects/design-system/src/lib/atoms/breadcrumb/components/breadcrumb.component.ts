import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreadcrumbModel } from '../models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbList: BreadcrumbModel[] = [];
  breadcrumbSubList1: BreadcrumbModel[] = [];
  breadcrumbSubList2: BreadcrumbModel[] = [];
  @Input() href: boolean = false;
  @Output() goTo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (this.breadcrumbList.length > 4) {
      this.breadcrumbSubList1 = [this.breadcrumbList[0], this.breadcrumbList[1]];
      this.breadcrumbSubList2 = [this.breadcrumbList[this.breadcrumbList.length - 2], this.breadcrumbList[this.breadcrumbList.length - 1]];
    }
  }

  ngOnChanges(): void {
    if (this.breadcrumbList.length > 4) {
      this.breadcrumbSubList1 = [this.breadcrumbList[0], this.breadcrumbList[1]];
      this.breadcrumbSubList2 = [this.breadcrumbList[this.breadcrumbList.length - 2], this.breadcrumbList[this.breadcrumbList.length - 1]];
    }
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  go(event: string): void {
    this.goTo.emit(event);
  }
}
