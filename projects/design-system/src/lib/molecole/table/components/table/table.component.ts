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

    @Input() alwaysShowPaginator!: boolean;

    @Input() loading!: boolean;

    @Input() lazy!: boolean;
    @Input() responsiveLayout!: string;
    @Input() columnResizeMode: string = 'fit';
    @Input() responsive: boolean = false;

    @Input() lazyOnInit: boolean = true;

    @Input() emitLazy!: boolean;

    @Input() dataKey: string = '';

    //    Output per triggerare il cambio pagina ( nuova chiamata al be)
    @Output() pageChanged: EventEmitter<{ pageNumber: number, field: string, order: number }> = new EventEmitter<{ pageNumber: number, field: string, order: number }>();

    @Output() lazyLoadChange: EventEmitter<any> = new EventEmitter<any>();

    //    Output per aggiornare il valore delle checkbox in tabella
    private checkedRow: any[] = [];
    @Output() selectedTableValues: EventEmitter<any[]> = new EventEmitter<any[]>();

    @Output() selectedValueChange: EventEmitter<any> = new EventEmitter<any>();

    //    Output per segnalare l'evento di sorting
    @Output() sortValues: EventEmitter<{ field: string, order: number }> = new EventEmitter<{ field: string, order: number }>();

    pageIndex: number = 0;
    firstRowInPage: number = 0;
    //environment = environment

    constructor(private tableService: LibTableService) { }

    ngOnInit() {
        console.log(this.value)
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

    selectedEvent(event: any) {
        console.log('Select/unselect', event);
        if (event.type === 'row') {
            // this.selectedValueChange.emit(event);
        }
        if (event.type === 'checkbox') {
            // (event.originalEvent as MouseEvent).stopPropagation();
            this.checkedEvent(event.originalEvent, event.data, 'single');
        }
    }

    emitSort(event: { field: string, order: number }): void {
        console.log(event);
        if (!this.lazy) {
            this.sortValues.emit(event);
        }
    }

    checkedEvent(event: MouseEvent, data: any, checkType: string) {
        console.log('checked', checkType + ': ', event);
        event.stopPropagation();
        this.checkedRow.push(data);
        this.selectedTableValues.emit(this.checkedRow);
    }

    selectionChangeWithMode(event: MouseEvent, data: any) {
        if (this.selectionType === 'checkbox') {
            console.log('SelModCheckbox', event + ': ', data);
            event.stopPropagation();
            // this.selectedValueChange.emit(data);
        } else {
            console.log('SelModOthers', event + ': ', data);
        }
    }
}
