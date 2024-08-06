import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'lib-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  // msgs1!: Message[];
  @Input() key: string = '';
  @Input() enableService: boolean = false;
  @Input() messages: Message[] = [];
  @Input() closable: boolean = true;

  @Output() messagesChange = new EventEmitter<Message[]>();
  


  emitMessagesChange(event: Message[]) {
    this.messages = event;
    this.messagesChange.emit(this.messages);
  }

}
