import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionTable, BreadcrumbModel } from 'projects/design-system/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
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
        { header: 'Prova1', isDisabled: false, content: '1', isSelected: false },
        { header: 'Prova2', isDisabled: false, content: '2', isSelected: false },
        { header: 'Prova3', isDisabled: false, content: '3', isSelected: false },

    ];

    items: any[] = [
        { name: 'Simone', surname: 'Giannuario' },
        { name: 'Daniele', surname: 'Corti' },
        { name: 'Vincenzo', surname: 'Marretta' },
    ]

    columns = [
        { header: "Nome", field: "name" },
        { header: "Cognome", field: "surname" }
    ];

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

    constructor(private fb: FormBuilder) { }

    goTo(event: any) {

    }

    submit() {
        if (this.form.valid) {

        } else {
            this.form.markAsTouched();
        }
    }
}
