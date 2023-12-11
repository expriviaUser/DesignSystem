import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUpload } from '../../../upload-file/models/file-upload.model';
import { Language } from '../../models/language.model';
import { MenuItem } from '../../models/menuItem.model';
import { HeaderItemsService } from '../../services/header-items.service';
import { DropdownType } from '../../../../atoms/dropdown/models/dropdown.model';

@Component({
  selector: 'lib-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {
  fileUpload: FileUpload[] = [];

  @Input() notificationsEnabled: boolean = true;
  @Input() valueDropdown!: DropdownType[];
  @Input() value!: string;

  @Input() user!: MenuItem[];

  @Input() languages: Language[] = [
    { code: 'it', name: 'it' },
    { code: 'en', name: 'en' },
  ]

  @Input() selectedOption: Language = { code: 'fr', name: 'fr' };

  @Output() languageChange: EventEmitter<Language> = new EventEmitter<Language>();
  @Output() dropdownSelection: EventEmitter<string> = new EventEmitter<string>();

  constructor(private headerItemsService: HeaderItemsService) { }

  ngOnInit() {
    this.headerItemsService.uploadFiles$.subscribe(values => {
      this.fileUpload = [...values];
    })
  }

  emitDropdownSelection(event: string) {
    this.dropdownSelection.emit(event);
  }
}
