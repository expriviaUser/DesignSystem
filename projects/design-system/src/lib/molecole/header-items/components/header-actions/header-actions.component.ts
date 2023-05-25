import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../models/menuItem.model';
import { UserNotification } from '../../models/user-notification.model';
import { FileUpload } from '../../../upload-file/models/file-upload.model';
import { Language } from '../../models/language.model';
import { HeaderItemsService } from '../../services/header-items.service';

@Component({
    selector: 'lib-header-actions',
    templateUrl: './header-actions.component.html',
    styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent {
    fileUpload: FileUpload[] = [];

    @Input() user: MenuItem[] = [
        {
            label: "Jonh Doe",
            items: [
                {
                    label: "Logout/Esci",
                    path: "../",
                    type: "internal",
                },
            ],
        },
    ];

    @Input() languages: Language[] = [
        { code: 'it', name: 'it' },
        { code: 'en', name: 'en' },
    ]

    @Input() selectedOption: Language = { code: 'fr', name: 'fr' };

    @Output() languageChange: EventEmitter<Language> = new EventEmitter<Language>();

    constructor(private headerItemsService: HeaderItemsService) { }

    ngOnInit() {
        this.headerItemsService.uploadFiles$.subscribe(values => {
            this.fileUpload = [...values];
        })
    }
}
