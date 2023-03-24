import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { ALERTS_GENERAL, MESSAGES_GENERAL } from '../../models/messages.model';

@Component({
    selector: 'lib-messages',
    templateUrl: './messages.component.html',
    providers: [MessageService],
    styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {

    // Alert/Message config
    alertKey: string = 'message-item';
    alertMsg: Message = ALERTS_GENERAL.error;

    // Toast config
    toastPosition: string = 'bottom-center';
    toastKey: string = 'general-toast';
    toastMsg: Message = MESSAGES_GENERAL.info;

    constructor(
        private messageService: MessageService,
    ) { }

    ngOnInit() { }

    showToastMessage(): void {
        const msg = { ...this.toastMsg, key: this.toastKey };
        this.messageService.add(msg);
    }

    showAlertMessage(): void {
        const msg = { ...this.alertMsg, key: this.alertKey };
        this.messageService.add(msg);
    }

}
