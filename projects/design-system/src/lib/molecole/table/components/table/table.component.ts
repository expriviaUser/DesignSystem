import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    TemplateRef
} from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { Table, TableService } from "primeng/table";
import { Cols } from "../../models/table.model";
import { LibTableService } from "../../services/lib-table.service";



@Component({
    selector: "lib-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
    providers: [Table, TableService]
})

export class TableComponent implements OnInit {
    // azioni della tabella
    @Input() actions?: TemplateRef<any>;
    // campi della tabella
    @Input() externalBody!: TemplateRef<any>;
    // header tabella
    @Input() externalHeader!: TemplateRef<any>;
    //   valori della tabella
    @Input() value!: any[];
    //   colonne della tabella
    @Input() columns!: Cols[];
    //   lenght massima dei valori della tabela
    @Input() totalRecords!: number;
    //   boolenao se le colonne sono ordinabili o meno
    @Input() sortable: boolean = false;

    @Input() showHeader: boolean = true;
    //    booleano se la tabella ha le checkbox
    @Input() isSelectable!: boolean;
    //    tipo di selezione della tabella, single o multiple
    @Input() selectionType!: string;

    @Input() rowsPerPage: any = [10, 25, 50];

    @Input() showPaginator: boolean = true;

    @Input() showReportPage: boolean = true;

    @Input() nRowsPerPage: number = 50;

    @Input() reportString: string = 'Showing {first} to {last} of {totalRecords} entries';

    //Abilita il sorting lato backend
    @Input() serverSort: boolean = false;
    // righe della tabella preselezionate
    @Input() selectedValue!: any;

    @Input() filters!: any;

    @Input() isScrollable!: boolean;

    @Input() resizableColumns: boolean = false;

    @Input() scrollHeight!: string;

    @Input() dataKey!: string;

    @Input() alwaysShowPaginator!: boolean;

    @Input() loading!: boolean;

    @Input() lazy!: boolean;
    @Input() responsiveLayout!: string;
    @Input() columnResizeMode: string = 'fit';
    @Input() responsive: boolean = false;

    @Input() lazyOnInit: boolean = true;

    @Input() emitLazy!: boolean;

    @Input() checked: any = [];

    //    Output per triggerare il cambio pagina ( nuova chiamata al be)
    @Output() pageChanged: EventEmitter<{ pageNumber: number, field: string, order: number }> = new EventEmitter<{ pageNumber: number, field: string, order: number }>();

    @Output() lazyLoadChange: EventEmitter<any> = new EventEmitter<any>();

    //    Output per aggiornare il valore delle checkbox in tabella
    @Output() checkedRowValues: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output() selectedValueChange: EventEmitter<any> = new EventEmitter<any>();

    //    Output per segnalare l'evento di sorting
    @Output() sortValues: EventEmitter<{ field: string, order: number }> = new EventEmitter<{ field: string, order: number }>();

    pageIndex: number = 0;
    firstRowInPage: number = 0;
    //environment = environment

    constructor(private tableService: LibTableService) { }

    ngOnInit() {
        if (!this.dataKey) {
            this.dataKey = this.columns[0].field;
        }
    }


    protected getFieldValue(data: { [key: string]: any }, field: string): any {
        // esempio con --> field country.name
        return this.tableService.getFieldValue(data, field);
    }

    protected lazyLoading(event: LazyLoadEvent) {
        let pageNumber = event.first && event.rows ? (event.first / event.rows + 1) : 1;

        if (!this.emitLazy) {
            this.pageChanged.emit({ pageNumber: pageNumber, field: event.sortField ? event.sortField : '', order: event.sortOrder ? event.sortOrder : 0 });
        } else {
            this.lazyLoadChange.emit(event);
        }
    }

    selectedEvent(event?: any) {
        this.selectedValueChange.emit(this.selectedValue);
        console.log('1');
    }

    emitSort(event: { field: string, order: number }): void {
        if (!this.lazy) {
            this.sortValues.emit(event);
        }
    }

    check(event: any, checkType: string, rowData?: any) {
        event.defaultEvent.stopPropagation();
        if (checkType === 'all') {
            this.checked = event.checked ? [...this.value.filter(el => el && !el.isDisabledChecked)] : [];
        } else {
            if (event.checked) {
                this.checked.push(rowData);
            } else {
                const indexToRemove = this.checked.findIndex((item: any) => item[this.dataKey] === rowData[this.dataKey]);
                this.checked.splice(indexToRemove, 1);
            }
        }

        this.checkedRowValues.emit(this.checked);
    }

    isChecked(rowData: any): boolean {
        return (this.checked.filter((item: any) => item[this.dataKey] === rowData[this.dataKey]).length > 0);
    }
}
