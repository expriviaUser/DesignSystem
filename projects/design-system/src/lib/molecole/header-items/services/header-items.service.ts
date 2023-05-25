import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileUpload } from '../../upload-file/models/file-upload.model';
import { UserNotification } from '../models/user-notification.model';

@Injectable({
    providedIn: 'root'
})
export class HeaderItemsService {
    cartItems$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    set cartItems(val: any) {
        let values = this.cartItems$.getValue();
        values.push(val);
        this.cartItems$.next(values);
    }

    uploadFiles$: BehaviorSubject<FileUpload[]> = new BehaviorSubject<FileUpload[]>([]);
    set uploadFiles(val: FileUpload) {
        let values = this.uploadFiles$.getValue();
        values.push(val);
        this.uploadFiles$.next(values);
    }

    notifications$: BehaviorSubject<UserNotification[]> = new BehaviorSubject<UserNotification[]>([]);
    set notifications(val: UserNotification) {
        let values = this.notifications$.getValue();
        values.push(val);
        this.notifications$.next(values);
    }

    constructor() { }
}
