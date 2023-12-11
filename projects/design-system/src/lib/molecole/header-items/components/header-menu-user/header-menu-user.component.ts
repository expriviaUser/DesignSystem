import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';

import { MenuItem } from 'primeng/api';
import { DropdownType } from '../../../../atoms/dropdown/models/dropdown.model';


@Component({
  selector: 'lib-header-menu-user',
  templateUrl: './header-menu-user.component.html',
  styleUrls: ['./header-menu-user.component.scss']
})
export class HeaderMenuUserComponent implements OnInit {

  isMobile?: boolean
  destroySub$ = new Subject<void>()
  @Input() menuNavbar?: MenuItem[];
  @Input() valueDropdown?: DropdownType[];
  @Input() value?: string;

  @Output() dropdownSelection = new EventEmitter<string>();

  constructor() { }

  ngOnDestroy() {
    this.destroySub$.next()
    this.destroySub$.complete()
  }
  ngOnInit() {

  }

  protected selectDropdownValue(event: string) {
    this.value = event;
    this.dropdownSelection.emit(this.value);
  }

}
