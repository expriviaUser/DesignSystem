import { Component, Input } from '@angular/core';
import { UserNotification } from '../../models/user-notification.model';

@Component({
  selector: 'lib-header-notifications',
  templateUrl: './header-notifications.component.html',
  styleUrls: ['./header-notifications.component.scss']
})
export class HeaderNotificationsComponent {
  @Input() notifications!: UserNotification[];
  notificationsNumber!: string;
  selectedNotification!: UserNotification;
  readAllNotification: UserNotification = {
    title: 'Mostra di più…',
    subtitle: '',
    id: 0,
    isRead: true,
  };

  ngOnInit() {
    this.setNotificationNumber();
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
