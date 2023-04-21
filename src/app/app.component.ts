import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Table, TableService } from 'primeng/table';
import {
    ActionTable,
    BreadcrumbModel,
    Cols,
    FileStatus,
    MenubarItem,
    SidebarItem,
    TreeMenu,
    TreeSelectModel
} from 'projects/design-system/src/public-api';
import { FiltersModel } from "../../projects/design-system/src/lib/micro-organismi/filters/models/filters.model";
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Table, TableService]
})
export class AppComponent {
    title = 'dSystem';
    form = this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.maxLength(4)],
        sex: ['']
    })
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

    get index(): number {
        return this.tabsList.findIndex(item => item.isSelected);
    }

    items: any[] = [
        { name: 'Simone', surname: 'Giannuario' },
        { name: 'Daniele', surname: 'Corti' },
        { name: 'Vincenzo', surname: 'Marretta' },
    ]

    columns: Cols[] = [
        { header: "Nome", field: "name", sort: true },
        { header: "Cognome", field: "surname" },
        { header: "Cognome", field: "surname", classes: 'long-field' },
        { header: "Cognome", field: "surname" },
    ];

    protected itemsMenu: MenubarItem[] = [
        { label: 'Richieste' },
        { label: 'Macero' },
        { label: 'Fatturazione' },
        { label: 'Logistica' },
        { label: 'Reportistica' },
        { label: 'Catalogazioni' }
    ];

    sidebarItems: SidebarItem[] = [
        { label: 'Etichette', style: { 'font-weight': 600 }, icon: 'pi pi-fw pi-plus', routerLink: 'app' },
        { label: 'Contenitori', icon: 'pi pi-fw pi-download', items: [{ label: 'Prova' }] },
        { label: 'Versamento', icon: 'pi pi-fw pi-download', items: [{ label: 'Prova' }] },
        { label: 'Macero', icon: 'pi pi-fw pi-download', items: [{ label: 'Prova' }] },
        { label: 'Proroga', icon: 'pi pi-fw pi-download', items: [{ label: 'Prova' }] },
        { label: 'Materiale d\'uso', icon: 'pi pi-fw pi-download', items: [{ label: 'Prova' }] },

        {
            label: 'Edit',
            items: [
                { label: 'Add User', icon: 'pi pi-fw pi-user-plus' },
                { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' }
            ]
        }
    ];

    fileArray: FileStatus[] = [
        { title: 'prova.pdf', dimension: '20MB', status: 'OK' },
        { title: '20 File', status: 'OK' },
        { title: '50 File', status: 'KO' },
    ]

    protected dropdownValue: string[] = ['Ufficio', 'ENI \\ ENISERVIZI \\ PRE \\ AD \\ SEBI \\ ATED', 'ENI \\ CARTELLE_PERSONALE', 'ENI \\ ENI CORPORATE', 'ENI \\ ING E&P RAV', 'ENI \\ ORTONA', 'ENI \\ VIGGIANO'];

    iconsTable: ActionTable[] = [
        {
            label: 'pi pi-plus',
            command: (event: any) => {
                /* this.router.navigate(["/assisted-registry/assisted/view", event.codFiscale], {
                    relativeTo: this.activatedRoute,
                }); */
            },
        },
        {
            label: 'pi pi-user',
            command: (event: any) => {
                /* this.router.navigate(["/assisted-registry/assisted/edit", event.codFiscale], {
                    relativeTo: this.activatedRoute,
                }); */
            },
        },
        {
            label: 'pi pi-plus',
            command: (event: any) => {
                /* this.router.navigate(["/assisted-registry/assisted/delete", event.codFiscale], {
                    relativeTo: this.activatedRoute,
                }); */
            },
        },
        {
            label: 'pi pi-user',
            items: [
                {
                    label: "Notificare scelta pediatrica in scadenza",
                    command: (event: any) => {
                        /* this.router.navigate(
                            [
                                "/assisted-registry/assisted/notifyexpiringpediatricchoice",
                                event.codFiscale,
                            ],
                            {
                                relativeTo: this.activatedRoute,
                            }
                        ); */
                    },
                },
                {
                    label: "Recuperare quote",
                    command: (event: any) => {
                        /* this.router.navigate(
                            ["/assisted-registry/assisted/recoveryquotes", event.codFiscale],
                            {
                                relativeTo: this.activatedRoute,
                            }
                        );*/
                    },
                },
                {
                    label: "Produrre certificato sostitutivo provvisorio TEAM",
                    command: (event: any) => {
                        /* this.router.navigate(

                            [`/assisted-registry/assisted/creazione-certificato-sostitutivo/${event.codFiscale}`],

                            {
                                relativeTo: this.activatedRoute,
                            }
                        ); */
                    },
                },
                {
                    label: "Gestire importo buono celiaco fuori regione (MANCA UX SIN-191)",
                    command: (event: any) => {
                        /* this.router.navigate(
                            [
                                `/assisted-registry/assisted/gestire-importo-buono-celiaco-fuori-regione/${event.codFiscale}`,

                            ],
                            {
                                relativeTo: this.activatedRoute,
                            }
                        );*/
                    },
                },
                {
                    label: "Posizione anagrafica",
                    command: (event: any) => {
                        /* this.router.navigate(
                            [
                                "/assisted-registry/assisted/historicalassistedregistryposition",
                                event.codFiscale,
                            ],
                            {
                                relativeTo: this.activatedRoute,
                            }
                        ); */
                    },
                }
            ],
        },
    ];

    myTiles = [
        {
            showHeaderAction: true,
            title: "Nome Sede 1",
            content: "Via Tal dei Tali Roma, RM (123456)",
            radioName: "nome-sede-1",
            radioValue: "1",
            radioDisabled: false
        },
        {
            showHeaderAction: false,
            title: "Nome Sede 2",
            content: "Via Tal dei Tali Roma, RM (123456)",
            radioName: "nome-sede-2",
            radioValue: "2",
            radioDisabled: false
        }
    ];

    treeSelectNodes: TreeSelectModel[] = [
        { label: 'Tipologia richiesta1', data: 'Tipologia richiesta1' },
        { label: 'Tipologia richiesta2', data: 'Tipologia richiesta2' },
        { label: 'Tipologia richiesta3', data: 'Tipologia richiesta3' },
        { label: 'Tipologia richiesta4', data: 'Tipologia richiesta4' },
    ];

    dropdownValues: FiltersModel[] = [
        { type: "treeselect",
            data: [
                { label: 'Tipologia richiesta1', data: 0 },
                { label: 'Tipologia richiesta2', data: 1 },
                { label: 'Tipologia richiesta3', data: 2 },
                { label: 'Tipologia richiesta4', data: 3 }

            ], placeholder: "Placeholder1", field: "filter1"
        },
      {
        type: "calendar",
        placeholder:"Date",
        field:"filterDate"
      },
        { type: "treeselect",
            data: [
                { label: 'Tipologia richiesta5', data: 'Data richiesta5' },
                { label: 'Tipologia richiesta6', data: 'Data richiesta6' },
                { label: 'Tipologia richiesta7', data: 'Data richiesta7' },
                { label: 'Tipologia richiesta8', data: 'Data richiesta8' }
            ], placeholder: "Placeholder2", field: "filter2"
        },
      {
        type: "calendar",
        placeholder:"Date2",
        field:"filterDate2"
      }
        ];
    dialogVisibility: boolean = true;

    treemenuItems: TreeMenu[] = [
        {
            label: 'Prova 1',
            data: 1,
            selectable: false,
            children: [
                {
                    label: 'Prova 1.1',
                    data: 2,
                    children: [
                        {
                            label: 'Prova 1.1.1',
                            data: 3,
                        }
                    ]
                }
            ]
        },
        {
            label: 'Prova 2',
            data: 4,
            children: [
                {
                    label: 'Prova 2.1',
                    data: 5,
                    children: [
                        {
                            label: 'Prova 2.1.1',
                            data: 6,
                        }
                    ]
                },
                {
                    label: 'Prova 2.1',
                    data: 5,
                    children: [
                        {
                            label: 'Prova 2.1.1',
                            data: 6,
                        }
                    ]
                }
            ]
        }
    ];

    selectedItems: TreeMenu[] = [];

    selectedMenu(event: any) {
        console.log(event);

        console.log(this.selectedItems);
    }


  autocompleteForm: FormGroup = this.fb.group({
    autocomplete: ['']
  });

  calendarForm: FormGroup = this.fb.group({
    calendar: ['', Validators.required],
    calendarAutoComplete: ['']
  });

  get calendarFormControl() {
    return this.calendarForm.controls;
  }

  calendarFormSubmitted = false;

  minDate: Date = new Date(2023, 2, 31);
  maxDate: Date = new Date(2023, 3, 31);




    constructor(private fb: FormBuilder, private config: PrimeNGConfig) {
        this.config.setTranslation({
            accept: 'Accept',
            reject: 'Cancel',
            monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
            dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            today: 'Oggi',
            clear: 'Svuota'
        }); //translations });
    }

    selectedValue = [{ name: 'Simone', surname: 'Giannuario' }, { name: 'Daniele', surname: 'Corti' },];

    filterValue = { name: 'Simone', surname: 'Giannuario' };

    dialog() {
        console.log(this.dialogVisibility);
        this.dialogVisibility = !this.dialogVisibility;
        console.log(this.dialogVisibility);
    }

    goTo(event: any) {

    }

    submit() {
        /* if (this.form.valid) {

        } else {
            this.form.markAsTouched();
        } */

        this.tabsList.forEach(item => {
            item.isSelected = false;
        });
        this.tabsList.filter(item => item.header == 'Prova3')[0].isSelected = true;
    }

    print(data: any): void {
        console.log(data);
        console.log(data[this.dropdownValues[0].field]);
    }

    formEmit(name: string){
      if(name=='autocomplete') {
        console.log(this.autocompleteForm);
      } else if (name =='calendar') {
        this.calendarFormSubmitted = true;
        console.log(this.calendarForm);
      }
    }


}
