import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { MessageComponent } from './components/message/message.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessagesComponent } from './components/messages/messages.component';


const primeComponents = [
    ToastModule,
    MessageModule,
    MessagesModule
];

const exportComponent = [
    ToastComponent,
    MessagesComponent,
    MessageComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class LibMessagesModule { }
