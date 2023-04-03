import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItem.model';
import { UserNotification } from '../../models/user-notification.model';
import { FileUpload } from '../../../upload-file/models/file-upload.model';

@Component({
    selector: 'lib-header-actions',
    templateUrl: './header-actions.component.html',
    styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent {
    @Input() fileUpload: FileUpload[] = [];
     
    @Input() notifs: UserNotification[] = [
        {
            title: 'Avviso generale dal team di Roberto Burioni',
            subtitle: 'Questi risultati indicano che, sebbene i vaccinati e/o guariti rimangono altamente infettivi, la loro infettività è ridotta rispetto agli individui mai infettati o vaccinati.',
            id: 3,
            isRead: false,
        },
        {
            title: 'Esito risultati Younan Nowzaradan',
            subtitle: 'During this time it\'s important to stay healthy, stay moving, read a book and if you do get out for a walk or the grocery store, be sure to maintain a distance of 6 feet.',
            id: 5,
            isRead: false,
        },
        {
            title: 'Mario Rossi',
            subtitle: 'Notifica non da leggere, to stay healthy, stay moving, read a book and if you do get out for a walk or the grocery store, be sure to maintain a distance of 6 feet.',
            isRead: true,
        }
    ];

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

    @Input() languages: {code: string, name: string}[] = [
        {code: 'it', name:'it'},
        {code: 'en', name:'en'},
    ]
}
