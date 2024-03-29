import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { UserNotification } from '../../models/user-notification.model';
import { HeaderItemsService } from '../../services/header-items.service';

@Component({
    selector: 'lib-header-notifications',
    templateUrl: './header-notifications.component.html',
    styleUrls: ['./header-notifications.component.scss']
})
export class HeaderNotificationsComponent implements OnInit {
    @Input() pageUrl: string = '';
    @Input() readAllLabel: string = 'Mostra di più';
    @Input() externalItems!: TemplateRef<any>;
    @Input() externalFooter!: TemplateRef<any>;

    @Output() emitPageClick = new EventEmitter<void>();
    @Output() emitNotificationClick = new EventEmitter<any>();

    notificationsNumber: string = '0';
    notifications$ = this.headerItemsService.notifications$;
    selectedNotification!: UserNotification;

    constructor(protected headerItemsService: HeaderItemsService) { }

    ngOnInit() {
        this.headerItemsService.notifications$.subscribe(values => {
            this.notificationsNumber = values.filter(el => el.isRead === false).length.toString();
        })
    }

}
