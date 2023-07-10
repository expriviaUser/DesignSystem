import { Component } from '@angular/core';
import { Cols, LibTableService } from 'projects/design-system/src/public-api';

@Component({
    selector: 'app-table-page',
    templateUrl: './table-page.component.html',
    styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent {

    items: any[] = [
        {
            name: 'Simone',
            surname: 'Giannuario',
            status: { id: 0, description: 'prova' },
            isDisabledChecked: true
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
        { header: 'Description', field: 'status.description' },
    ];


    selectionTable!: any;
    checkedValues!: any;

    selectVal() {
        this.selectionTable = this.items[0];
    }

    deselectVal() {
        this.selectionTable = null;
    }

    constructor(protected tableService: LibTableService) { }


    selectedProducts!: any;
}
