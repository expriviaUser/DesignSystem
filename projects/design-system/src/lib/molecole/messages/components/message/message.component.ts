import { Component, Input } from '@angular/core';
// import { Message } from 'primeng/api';

@Component({
    selector: 'lib-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent {

    // msgs1!: Message[];
    @Input() key: string = '';

}
