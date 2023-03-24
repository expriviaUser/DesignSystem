import { Component, Input } from '@angular/core';
// import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'lib-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() position: string = 'top-right';
  @Input() key: string = '';

}
