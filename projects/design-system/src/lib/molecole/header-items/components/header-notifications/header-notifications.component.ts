import { Component, Input } from '@angular/core';
import { UserNotification } from '../../models/user-notification.model';
import { HeaderItemsService } from '../../services/header-items.service';

@Component({
    selector: 'lib-header-notifications',
    templateUrl: './header-notifications.component.html',
    styleUrls: ['./header-notifications.component.scss']
})
export class HeaderNotificationsComponent {
    notifications!: UserNotification[];
    notificationsNumber!: string;
    selectedNotification!: UserNotification;
    readAllNotification: UserNotification = {
        title: 'Mostra di più…',
        subtitle: '',
        id: 0,
        isRead: true,
    };

    constructor(private headerItemsService: HeaderItemsService) { }

    ngOnInit() {
        this.setNotificationNumber();
        this.headerItemsService.cartItems$.subscribe(values => {
            if (values.length > 0) {
                this.notifications = [...values];
            } else {
                this.notifications = [
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
            }
        })
    }

    /**
     * In base alla lunghezza dell'oggetto che contiene le notifiche
     * (notifications) valorizza la property del numero di notifiche.
     *
     * @returns void
     */
    setNotificationNumber(): void {
        if (!this.notifications) {
            this.notificationsNumber = '0';
            return;
        }
        this.notificationsNumber = this.notifications.length.toString();
    }

}
