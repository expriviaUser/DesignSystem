import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Table, TableService } from 'primeng/table';
import { MessageService, OverlayOptions, PrimeNGConfig } from 'primeng/api';
import { Language } from 'projects/design-system/src/lib/molecole/header-items/models/language.model';
import { ActionTable, BreadcrumbModel, Cols } from '@dnlcorti/design-system';
import { TreeMenu } from '../../projects/design-system/src/lib/atoms/treemenu/models/treemenu.model';
import { MenubarItem } from '../../projects/design-system/src/lib/molecole/header-menu/models/menu-item.model';
import { SidebarItem } from '../../projects/design-system/src/lib/atoms/sidebar/models/sidebar-item.model';
import { FileStatus } from '../../projects/design-system/src/lib/molecole/file-status/models/fileStatus.model';
import { TreeSelectModel } from '../../projects/design-system/src/lib/atoms/tree-select/models/tree-select.model';
import {
    FiltersModel,
    OnlyFiltersChip,
    OnlyFiltersModel,
} from '../../projects/design-system/src/lib/micro-organismi/filters/models/filters.model';
import { LibTableService } from '../../projects/design-system/src/lib/molecole/table/services/lib-table.service';
import { LoaderService } from 'projects/design-system/src/lib/atoms/loader/services/loader.service';
import { FiltersService } from 'projects/design-system/src/lib/micro-organismi/filters/services/filters.service';
import { HeaderItemsService } from 'projects/design-system/src/lib/molecole/header-items/services/header-items.service';
import { Tabs } from 'projects/design-system/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Table, TableService, MessageService],
})
export class AppComponent {
    title = 'dSystem';
    form = this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.maxLength(4)],
        sex: [''],
    });

    protected sections: Tabs[] = [
        {
            header: 'In Attesa', isDisabled: false, isSelected: false, content: 'In Attesa', hide: true
        },
        {
            header: 'Consegne Programmate', isDisabled: false, isSelected: true, content: 'Consegne Programmate'
        },
        {
            header: 'Archivio Richieste', isDisabled: false, isSelected: false, content: 'Archivio Richieste'
        },
        {
            header: 'Da Approvare', isDisabled: false, isSelected: false, content: 'Da Approvare', hide: true
        },
        {
            header: 'In corso di autorizzazione', isDisabled: false, isSelected: false, content: 'In corso di autorizzazione'
        },
    ];

    calendarDate = new Date('2023-07-18T00:00:00');

    protected tabIndex = 1;

    breadcrumbList: BreadcrumbModel[] = [
        { active: false, link: '', name: 'Prova' },
        { active: false, link: '', name: 'Prova2' },
        { active: true, link: '', name: 'Prova3' },
    ];
    tabsList = [
        { header: 'Prova1', isDisabled: true, content: '1', isSelected: false },
        { header: 'Prova2', isDisabled: false, content: '2', isSelected: true },
        { header: 'Prova3', isDisabled: false, content: '3', isSelected: false },
    ];

    index = 0;

    items: any[] = [
        {
            name: 'Simone',
            surname: 'Giannuario',
            status: { id: 0, description: 'prova' },
        },
        {
            name: 'Daniele',
            surname: 'Corti',
            status: { id: 0, description: 'prova' },
        },
        {
            name: 'Vincenzo',
            surname: 'Marretta',
            status: { id: 0, description: 'prova' },
        },
    ];
    items2: any[] = [
        {
            name: 'Simone',
            surname: 'Giannuario',
            status: { id: 0, description: 'prova' },
        },
        {
            name: 'Daniele',
            surname: 'Corti',
            status: { id: 0, description: 'prova' },
        },
        {
            name: 'Vincenzo',
            surname: 'Marretta',
            status: { id: 0, description: 'prova' },
        },
    ];

    columns: Cols[] = [
        { header: 'Nome', field: 'name', sort: true },
        { header: 'Cognome', field: 'surname' },
        { header: 'Cognome', field: 'surname' },
        { header: 'Description', field: 'status.description' },
    ];

    protected itemsMenu: MenubarItem[] = [
        { label: 'Form', routerLink: 'form' },
        { label: 'Table', routerLink: 'table' },
        { label: 'ListBox', routerLink: 'listbox' },
        { label: 'Buttons', routerLink: 'button' },
        { label: 'RadioTile', routerLink: 'radio-tile' },
    ];

    message() {
        this.messagesService.add({ severity: 'success', summary: 'Success', detail: 'Message Content', key: 'all' });
        this.messagesService.add({ severity: 'warn', summary: 'warn', detail: 'Message Content', key: 'all' });
        this.messagesService.add({ severity: 'error', summary: 'error', detail: 'Message Content', key: 'all' });
        this.messagesService.add({ severity: 'info', summary: 'info', detail: 'Message Content', key: 'all' });
    }

    protected myEvents: any = [
        {
            date: new Date(), labels: [
                { data: 1, address: { label: 'Palazzo Mattei', content: 'Via Tal dei Tali, Roma, RM...' }, request: { label: 'Etichette', requestId: 1, catalogationsNumber: 10, date: new Date() } },
                { data: 2, address: { label: 'Palazzo Mattei', content: 'Via Tal dei Tali, Roma, RM...' }, request: { label: 'Contenitore', requestId: 1, catalogationsNumber: 10, date: new Date() } },
                { data: 2, address: { label: 'Palazzo Mattei', content: 'Via Tal dei Tali, Roma, RM...' }, request: { label: 'Consultazione', requestId: 1, catalogationsNumber: 10, date: new Date() } },
                { data: 3, address: { label: 'Studio Legale avv. Mario Rossi', content: 'Via Tal dei Tali, Bologna, BO...' }, request: { label: 'Contenitore', requestId: 1, catalogationsNumber: 10, date: new Date() } }
            ]
        },
        {
            date: new Date(), labels: [
                { data: 1, address: { label: 'Palazzo Mattei', content: 'Via Roma 1, Napoli, NA' }, request: { label: 'Consultazioni', requestId: 1, catalogationsNumber: 10, date: new Date() } },
                { data: 2, address: { label: 'Palazzo Mattei 123', content: 'Via Napoli 1, Roma, RM' }, request: { label: 'Catalogazioni', requestId: 1, catalogationsNumber: 10, date: new Date() } },
            ]
        },


    ]

    sidebarItems: SidebarItem[] = [
        {
            label: 'Form',
            style: { 'font-weight': 600 },
            icon: 'pi pi-fw pi-plus',
            routerLink: 'form',
        },
        {
            label: 'Contenitori',
            icon: 'pi pi-fw pi-download',
            items: [{ label: 'Prova' }],
        },
        {
            label: 'Versamento',
            icon: 'pi pi-fw pi-download',
            items: [{ label: 'Prova' }],
        },
        {
            label: 'Macero',
            icon: 'pi pi-fw pi-download',
            items: [{ label: 'Prova' }],
        },
        {
            label: 'Proroga',
            icon: 'pi pi-fw pi-download',
            items: [{ label: 'Prova' }],
        },
        {
            label: "Materiale d'uso",
            icon: 'pi pi-fw pi-download',
            items: [{ label: 'Prova' }],
        },

        {
            label: 'Edit',
            items: [
                { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
                { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' },
            ],
        },
    ];

    fileArray: FileStatus[] = [
        { title: 'prova.pdf', dimension: '20MB', status: 'OK' },
        { title: '20 File', status: 'OK' },
        { title: '50 File', status: 'KO' },
    ];

    protected dropdownValue: string[] = [
        'Ufficio',
        'ENI \\ ENISERVIZI \\ PRE \\ AD \\ SEBI \\ ATED',
        'ENI \\ CARTELLE_PERSONALE',
        'ENI \\ ENI CORPORATE',
        'ENI \\ ING E&P RAV',
        'ENI \\ ORTONA',
        'ENI \\ VIGGIANO',
    ];


    myTiles = [
        {
            showHeaderAction: true,
            title: 'Nome Sede 1',
            content: 'Via Tal dei Tali Roma, RM (123456)',
            radioName: 'nome-sede-1',
            radioValue: '1',
            radioDisabled: false,
        },
        {
            showHeaderAction: false,
            title: 'Nome Sede 2',
            content: 'Via Tal dei Tali Roma, RM (123456)',
            radioName: 'nome-sede-2',
            radioValue: '2',
            radioDisabled: false,
        },
    ];

    treeSelectNodes: TreeSelectModel[] = [
        { label: 'Tipologia richiesta1', data: 'Tipologia richiesta1' },
        { label: 'Tipologia richiesta2', data: 'Tipologia richiesta2' },
        { label: 'Tipologia richiesta3', data: 'Tipologia richiesta3' },
        { label: 'Tipologia richiesta4', data: 'Tipologia richiesta4' },
    ];

    dropdownValues: FiltersModel[] = [
        {
            type: 'treeselect',
            selectionType: 'single',
            data: [
                { label: 'Tipologia richiesta1', data: 0 },
                { label: 'Tipologia richiesta2', data: 1 },
                { label: 'Tipologia richiesta3', data: 2 },
                { label: 'Tipologia richiesta4', data: 3 },
            ],
            placeholder: 'Placeholder1',
            field: 'filter1',
        },
        /* {
            type: 'dropdown',
            selectionType: 'multiple',
            data: this.users.map(item => { return { data: item.id, label: item.name + ' ' + item.surname } }),
            placeholder: 'Dropdown filter',
            field: 'filter6',
        }, */
        {
            type: 'calendar',
            placeholder: 'Date',
            field: 'filterDate',
        },
        {
            type: 'treeselect',
            data: [
                { label: 'Tipologia richiesta5', data: 'Data richiesta5' },
                { label: 'Tipologia richiesta6', data: 'Data richiesta6' },
                { label: 'Tipologia richiesta7', data: 'Data richiesta7' },
                { label: 'Tipologia richiesta8', data: 'Data richiesta8' },
            ],
            placeholder: 'Placeholder2',
            field: 'filter2',
        },
        {
            type: 'calendar',
            placeholder: 'Date2',
            field: 'filterDate2',
        },
    ];
    filtersResult: OnlyFiltersChip[] = [];
    selectedTreeMenu = {
        label: 'Prova 1.1.1',
        data: 3,
    };
    dropdownValuesThird: OnlyFiltersModel | undefined = undefined;
    dialogVisibility: boolean = true;

    treemenuItems: TreeMenu[] = [
        {
            label: 'Prova 1',
            data: 1,
            selectable: false,
            key: '1',
            children: [
                {
                    label: 'Prova 1.1',
                    key: '2',
                    data: 2,
                    children: [
                        {
                            label: 'Prova 1.1.1',
                            data: 3,
                            key: '3',
                        },
                    ],
                },
            ],
        },
        {
            label: 'Prova 2',
            data: 4,
            key: '4',
            children: [
                {
                    label: 'Prova 2.1',
                    data: 5,
                    key: '5',
                    children: [
                        {
                            label: 'Prova 2.1.1',
                            data: 6,
                            key: '6',
                        },
                    ],
                },
                {
                    label: 'Prova 2.1',
                    data: 5,
                    key: '7',
                    children: [
                        {
                            label: 'Prova 2.1.1',
                            data: 6,
                            key: '8',
                        },
                    ],
                },
            ],
        },
    ];

    selectedItems: TreeMenu[] = [
        { data: 6, label: "Prova 2.1.1", key: '8' }
    ]

    autocompleteForm: FormGroup = this.fb.group({
        autocomplete: ['', Validators.required],
    });

    calendarForm: FormGroup = this.fb.group({
        calendar: ['', Validators.required],
        calendarAutoComplete: [''],
    });

    get calendarFormControl() {
        return this.calendarForm.controls;
    }

    calendarFormSubmitted = false;

    minDate: Date = new Date(2023, 2, 31);
    maxDate: Date = new Date(2023, 3, 31);

    changeFiltersResult(event: OnlyFiltersChip) {
        let result = [
            ...this.filtersService.getFiltersResult(event, this.filtersResult),
        ];
        this.filtersResult = [];
        this.filtersResult = [...result];
        if (
            this.filtersResult[0] && this.filtersResult[0].result &&
            this.filtersResult[0].result[0] &&
            this.filtersResult[0].result.filter(
                (item) => item.chipsLabel == 'Tipologia richiesta1'
            ).length > 0 &&
            !this.dropdownValuesThird
        )
            this.dropdownValuesThird = {
                id: 1,
                filters: [
                    {
                        type: 'treeselect',
                        selectionType: 'single',
                        data: [
                            { label: 'richiesta1', data: 0 },
                            { label: 'richiesta2', data: 1 },
                            { label: 'richiesta3', data: 2 },
                            { label: 'richiesta4', data: 3 },
                        ],
                        placeholder: 'Placeholder5',
                        field: 'filter5',
                    },
                    {
                        addFilterButtonLabel: 'Aggiungi metadato',
                        type: 'children',
                        selectionType: 'single',
                        data: [
                            { data: 75, label: 'Codice Cliente', type: 'text' },
                            { data: 76, label: 'Tipologia Documento', type: 'text' },
                            { data: 77, label: 'Contratto Fornitore', type: 'number' },
                            { data: 1, label: 'Campo fisso ENIU', type: 'text' },
                            { data: 52, label: 'Cognome', type: 'text' },
                            { data: 53, label: 'Nome', type: 'text' },
                            { data: 55, label: 'Luogo di Nascita', type: 'text' },
                            { data: 74, label: 'Provincia di Nascita', type: 'text' },
                            {
                                data: 54,
                                label: 'Data di Nascita',
                                type: 'calendar',
                                config: { selection: 'single' },
                            },
                            { data: 17, label: 'Codice Fiscale', type: 'text' },
                            { data: 70, label: 'Data Produzione', type: '' },
                            { data: 71, label: 'Data Pubblicazione', type: '' },
                            {
                                data: 50,
                                label: 'File (formato: folder\\\\nomefile)',
                                type: 'text',
                            },
                            { data: 2, label: 'Protocollo assegnato', type: 'number' },
                            {
                                data: 93,
                                label: 'Carattere separatore fatturazione',
                                type: 'text',
                            },
                            {
                                data: 78,
                                label: 'Data Esportazione verso GD (data invio flusso)',
                                type: 'calendar',
                                config: { selection: 'single' },
                            },
                            {
                                data: 79,
                                label: 'Pratica (modalità manuale  modalità automatica)',
                                type: 'number',
                            },
                            { data: 80, label: 'Scansione fogli A4 A3', type: 'number' },
                            { data: 81, label: 'Scansione fogli A0', type: 'number' },
                            { data: 82, label: 'Scansione fogli A1', type: 'number' },
                            { data: 83, label: 'Scansione fogli A2', type: 'number' },
                            {
                                data: 84,
                                label: 'Scansione fogli formato non standard',
                                type: 'number',
                            },
                            {
                                data: 85,
                                label: 'Rilevazione inf. dati dai moduli catastali',
                                type: 'number',
                            },
                            {
                                data: 86,
                                label: 'Rilevazione dati da altri documenti',
                                type: 'number',
                            },
                            {
                                data: 87,
                                label: 'Preparazione pratica A4 A3 classe A fino a 100 fogli',
                                type: 'number',
                            },
                            {
                                data: 88,
                                label: 'Preparazione pratica A4 A3 classe B fino a 100 fogli',
                                type: 'number',
                            },
                            {
                                data: 89,
                                label: 'Preparazione pratica A4 A3 classe C fino a 100 fogli',
                                type: 'number',
                            },
                            {
                                data: 90,
                                label:
                                    'Preparazione pratica maggiore A3 classe A fino a 100 fogli',
                                type: 'number',
                            },
                            {
                                data: 91,
                                label:
                                    'Preparazione pratica maggiore A3 classe B fino a 100 fogli',
                                type: 'number',
                            },
                            {
                                data: 92,
                                label:
                                    'Preparazione pratica maggiore A3 classe C fino a 100 fogli',
                                type: 'number',
                            },
                        ],
                        placeholder: 'Metadata',
                        field: 'metadata',
                    },
                ],
            };
        else if (
            !(
                this.filtersResult[0] &&
                this.filtersResult[0].result[0] &&
                this.filtersResult[0].result.filter(
                    (item) => item.chipsLabel == 'Tipologia richiesta1'
                ).length > 0
            )
        )
            this.dropdownValuesThird = undefined;
    }

    /*  removeFilterChip(event: OnlyFiltersChip) {
         let result = [
             ...this.filtersService.removeFiltersChip(event, this.filtersResult),
         ];
         this.filtersResult = [];
         this.filtersResult = [...result];
         this.dropdownValuesSecond?.filters[event.result[0].dropdownIndex].data?.forEach(item => {
             if (item.data == event.result[0].data)
                 item.disabled = false;
         });
 
         if (
             !(
                 this.filtersResult[0] &&
                 this.filtersResult[0].result[0] &&
                 this.filtersResult[0].result.filter(
                     (item) => item.chipsLabel == 'Tipologia richiesta1'
                 ).length > 0
             )
         )
             this.dropdownValuesThird = undefined;
     } */

    values(index: number): OnlyFiltersChip {
        return this.filtersResult &&
            this.filtersResult[index] &&
            this.filtersResult[index].data
            ? { ...this.filtersResult[index] }
            : ({} as OnlyFiltersChip);
    }

    constructor(
        private fb: FormBuilder,
        private config: PrimeNGConfig,
        private tableService: LibTableService,
        private loaderService: LoaderService,
        private filtersService: FiltersService,
        private headerItemsService: HeaderItemsService,
        private messagesService: MessageService
    ) {
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

    getFieldValue(data: { [key: string]: any }, field: string) {
        return this.tableService.getFieldValue(data, field);
    }

    selectedValue = [
        { name: 'Simone', surname: 'Giannuario' },
        { name: 'Daniele', surname: 'Corti' },
    ];

    filterValue = { name: 'Simone', surname: 'Giannuario' };

    selectionTable!: any;

    selectVal() {
        this.selectionTable = this.items[0];
    }

    deselectVal() {
        this.selectionTable = null;
    }

    dialog() {
        /* console.log(this.dialogVisibility);
        this.dialogVisibility = !this.dialogVisibility;
        console.log(this.dialogVisibility); */
        this.headerItemsService.cartItems = { id: 1, title: 'provaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' };
        this.headerItemsService.cartItems = { id: 2, title: 'prova2' };
    }
    overlayOptions: OverlayOptions = { mode: 'overlay', appendTo: 'body' };
    logInputEmit(event: any) {
        console.log('STAMPA INPUT :', event);
    }

    goTo(event: any) { }

    submit() {
        /* if (this.form.valid) {
        
            } else {
                this.form.markAsTouched();
            } */

        this.tabsList.forEach((item) => {
            item.isSelected = false;
        });
        this.tabsList.filter((item) => item.header == 'Prova3')[0].isSelected =
            true;
    }

    print(data: any): void {
        console.log(data);
        console.log(data[this.dropdownValues[0].field]);
    }

    languages = [
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

    public catchChange(lang: Language): void {
        console.log(lang);
    }

    formEmit(name: string) {
        if (name == 'autocomplete') {
            console.log(this.autocompleteForm);
        } else if (name == 'calendar') {
            this.calendarFormSubmitted = true;
            console.log(this.calendarForm);
        }
    }
}
