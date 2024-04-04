import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { UserNotification } from '../../models/user-notification.model';
import { HeaderItemsService } from '../../services/header-items.service';
import moment from 'moment';

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
  @Input() notificationsNumber: number = 0;
  @Input() isExternalNumber: boolean = false;
  @Input() paramToNumber: string = 'isRead';
  @Input() enableSubtitle: boolean = true;
  @Input() enableDate: boolean = false;
  @Input() enableIcon: boolean = false;
  @Input() formattedDate!: Function;

  @Output() emitPageClick = new EventEmitter<void>();
  @Output() emitNotificationClick = new EventEmitter<any>();
  @Output() emitOpenOverlay = new EventEmitter<void>();

  notifications$ = this.headerItemsService.notifications$;
  selectedNotification!: UserNotification;

  constructor(protected headerItemsService: HeaderItemsService) { }

  getFormattedDate(date: Date) {
    if (this.formattedDate) {
      return this.formattedDate(date);
    }
    const momentDate = moment(date);
    const newDate = new Date();
    const momentNewDate = moment(newDate);
    if (momentNewDate.subtract(5, 'm') < momentDate && momentDate >= momentNewDate ) {
      return 'adesso';
    } else if (moment(newDate).subtract(10, 'm') < momentDate && momentDate >= moment(newDate).subtract(5, 'm') ) {
      return '10 minuti fa';
    } else if (moment(newDate).subtract(20, 'm') < momentDate && momentDate >= moment(newDate).subtract(10, 'm') ) {
      return '20 minuti fa';
    } else if (moment(newDate).subtract(30, 'm') < momentDate && momentDate >= moment(newDate).subtract(30, 'm') ) {
      return 'mezzora fa';
    } else if (moment(newDate).subtract(60, 'm') < momentDate && momentDate >= moment(newDate).subtract(30, 'm') ) {
      return 'un\'ora fa';
    } else if (moment(newDate).subtract(120, 'm') < momentDate && momentDate >= moment(newDate).subtract(60, 'm') ) {
      return 'due ore fa';
    } else if (moment(newDate).subtract(240, 'm') < momentDate && momentDate >= moment(newDate).subtract(120, 'm') ) {
      return 'tre ore fa';
    } else if (moment(newDate).subtract(1, 'day').date() === momentDate.date() ) {
      return 'ieri';
    } else if (moment(newDate).subtract(2, 'day').date() === momentDate.date() ) {
      return '2 giorni fa';
    } else if (moment(newDate).subtract(3, 'day').date() === momentDate.date() ) {
      return '3 giorni fa';
    } else if (moment(newDate).subtract(4, 'day').date() === momentDate.date() ) {
      return '4 giorni fa';
    } else if (moment(newDate).subtract(5, 'day').date() === momentDate.date() ) {
      return '5 giorni fa';
    } else if (moment(newDate).subtract(6, 'day').date() === momentDate.date() ) {
      return '6 giorni fa';
    } else if (moment(newDate).subtract(7, 'day').date() <= momentDate.date() && momentDate >= moment(newDate).subtract(10, 'day') ) {
      return 'una settimana fa';
    } else {
      return momentDate.format('DD MMM yyyy - hh:mm');
    }
  } 

  ngOnInit() {
    this.headerItemsService.notifications$.subscribe(values => {
      if (!this.isExternalNumber) {
        this.notificationsNumber = values.filter(el => el[this.paramToNumber] === false).length;
      }
    })

    this.headerItemsService.notifications = {
      title: 'Prova notifica più lunga del solito, ancora più lunga del solito',
      subtitle: 'Prova messaggio più lungo del solito',
      id: 0, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: false, // true se la notifica è stata già cliccata, false altrimenti
      url: '',
      icon: 'pi pi-wrench',
      date: new Date(1711731361000)
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 1, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: false, // true se la notifica è stata già cliccata, false altrimenti
      url: '',
      date: new Date(1711795058000)
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 2, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche',
      icon: 'pi pi-bolt'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 3, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche',
      icon: 'pi pi-bell',
      date: new Date(1711355858000)
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 4, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 5, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 6, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 7, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 8, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 9, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 10, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 11, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
    this.headerItemsService.notifications = {
      title: 'Prova notifica',
      subtitle: 'Prova messaggio',
      id: 12, // parametro della rotta verso cui andare per leggere le notifiche
      isRead: true, // true se la notifica è stata già cliccata, false altrimenti
      url: '/notifiche'
    }
  }
}
