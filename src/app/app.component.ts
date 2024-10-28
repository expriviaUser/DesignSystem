import { Component } from '@angular/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { LoaderService } from 'projects/design-system/src/lib/atoms/loader/services/loader.service';
import { HeaderItemsService, Tabs, UserNotification } from 'projects/design-system/src/public-api';
import { AccordionData } from "../../projects/design-system/src/lib/atoms/accordion/models/accordion.model";
import { MenubarItem } from '../../projects/design-system/src/lib/molecole/header-menu/models/menu-item.model';
import { TreeMenu } from '@expriviauser/design-system';
import moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Table, TableService, MessageService],
})
export class AppComponent {
  title = 'DesignSystem';

  protected activeIndex = 0;

  stepsItems: MenuItem[] = [
    {label: 'Step1', items: []},
    {label: 'Step2', items: [], disabled: true},
    {label: 'Step3', items: []},
    {label: 'Step4', items: [], disabled: true},
    {label: 'Step5', items: []},
  ]

  changeStep: '' | 'next' | 'previous' = '';
  protected notifications: UserNotification[] = [];
  protected itemsMenu: MenubarItem[] = [
    { label: 'Form', routerLink: 'form' },
    { label: 'Table', routerLink: 'table' },
    { label: 'ListBox', routerLink: 'listbox' },
    { label: 'Buttons', routerLink: 'button' },
    { label: 'RadioTile', routerLink: 'radio-tile' },
    { label: 'Filters', routerLink: 'filters' },
  ];

  protected sections: Tabs[] = [
    { header: 'prova', hide: false, isDisabled: true, isSelected: false },
    { header: 'prova2', hide: true, isDisabled: false, isSelected: false },
    { header: 'prova4', hide: true, isDisabled: true, isSelected: false },
    { header: 'prova3', isSelected: false, isDisabled: false },
    { header: 'prova4', isSelected: false, isDisabled: false },
  ];

  protected tabIndex = 0;
  protected dateMoment = moment('2024-10-22T15:34:28.1519175+00:00').tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss');

  protected accordionSections: AccordionData[] = [
    { header: 'prova1', content: 'test1', val: 'val1' },
    { header: 'prova2', content: 'test2', val: 'val2' },
    { header: 'prova3', content: 'test3', val: 'val3' },
  ];

  protected accordionIndex: number = 0;

  protected isActive = true;

  protected dropdownValue: string[] = [
    'Ufficio',
    'ENI \\ ENISERVIZI \\ PRE \\ AD \\ SEBI \\ ATED',
    'ENI \\ CARTELLE_PERSONALE',
    'ENI \\ ENI CORPORATE',
    'ENI \\ ING E&P RAV',
    'ENI \\ ORTONA',
    'ENI \\ VIGGIANO',
  ];

  addedChanges: { data: number; label: string; show: boolean; checked: boolean; }[] = [
    {data: 0, label: 'ccc', show: true, checked: false},
    {data: 1, label: 'xxx', show: false, checked: true},
    {data: 2, label: 'vvv', show: true, checked: false},
    {data: 3, label: 'nnn', show: false, checked: false},
  ];

  log(event) {
    console.log(event);
  }

  formatDate(date: Date) {
    return new Date();
  }
  protected languages = [
    {
      name: 'it',
      code: 'it',
    },
    {
      name: 'fr',
      code: 'fr',
    },
    {
      name: 'sp',
      code: 'sp',
    },
    {
      name: 'en',
      code: 'en',
    },
  ];

  structuresList: Array<TreeMenu> = [
    {data: 1, label: '1', children: [{data: 2, label: '2'}]},
    {data: 3, label: '3', children: [{data: 4, label: '4'}]},
    {data: 5, label: '5', children: [{data: 6, label: '6'}]},
  ];

  selectedStructures: Array<TreeMenu> = [];

  vaffanculo(event: any) {
    console.log(event);
  }

  protected menuItem!: any;

  constructor(
    private config: PrimeNGConfig,
    private headerItemsService: HeaderItemsService,
    private loaderService: LoaderService) {
    this.config.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      monthNames: [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre',
      ],
      monthNamesShort: [
        'Gen',
        'Feb',
        'Mar',
        'Apr',
        'Mag',
        'Giu',
        'Lug',
        'Ago',
        'Set',
        'Ott',
        'Nov',
        'Dic',
      ],
      dayNames: [
        'Domenica',
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      today: 'Oggi',
      clear: 'Svuota',
    }); //translations });

    setTimeout(() => {
      this.loaderService.showHide(false);
    }, 3600);
  }

  goToHomePage() {

  }

  ngOnInit() {
    this.addNotify();
  }

  protected addNotify() {
    this.headerItemsService.notifications =
    {
      title: 'Avviso generale dal team di Roberto Burioni',
      subtitle: 'Questi risultati indicano che, sebbene i vaccinati e/o guariti rimangono altamente infettivi, la loro infettività è ridotta rispetto agli individui mai infettati o vaccinati.',
      id: 3,
      isRead: false,
    };
    this.headerItemsService.notifications =
    {
      title: 'Esito risultati Younan Nowzaradan',
      subtitle: 'During this time it\'s important to stay healthy, stay moving, read a book and if you do get out for a walk or the grocery store, be sure to maintain a distance of 6 feet.',
      id: 5,
      isRead: false,
    };
    this.headerItemsService.notifications =
    {
      title: 'Mario Rossi',
      subtitle: 'Notifica non da leggere, to stay healthy, stay moving, read a book and if you do get out for a walk or the grocery store, be sure to maintain a distance of 6 feet.',
      isRead: true,
      id: 4
    };
  }

  print(value: any) {
    console.log(value);
  }
}
