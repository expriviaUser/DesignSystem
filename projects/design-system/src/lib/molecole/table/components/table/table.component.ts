import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output,
    TemplateRef,
    SimpleChanges,
    OnChanges,
    ViewChild} from "@angular/core";
import { Table, TableService } from "primeng/table";
import { Cols, PaginatorData } from "../../models/table.model";



@Component({
    selector: "lib-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
    providers: [Table, TableService]
})

export class TableComponent implements OnInit, OnChanges {
    // azioni della tabella
    @Input() actions?: TemplateRef<any>;
    // campi della tabella
    @Input() externalBody!: TemplateRef<any>;
    //   valori della tabella
    @Input() value!: any[];
    //   colonne della tabella
    @Input() columns!: Cols[];
    //   lenght massima dei valori della tabela
    @Input() totalRecords!: number;
    //   boolenao se le colonne sono ordinabili o meno
    @Input() sortable: boolean = false;
    //    booleano se la tabella ha le checkbox
    @Input() isSelectable!: boolean;
    //    tipo di selezione della tabella, single o multiple
    @Input() selectionType!: string;
    //    ritorno tutta la response della chiamata
    @Input() allResponse!: any;

    @Input() rowsPerPage: any = [10,25,50];

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

    @Input() scrollHeight!: string;
    
    @Input() alwaysShowPaginator!: boolean;

    //    Output per triggerare il cambio pagina ( nuova chiamata al be)
    @Output() pageChanged = new EventEmitter<any>();
    //    Output per aggiornare il paramentro Page da passare al be
    @Input('pageNumberBe') pageIncrement: number = 0
    @Output('pageNumberBeChange') pageIncrementChange = new EventEmitter<number>()

    //    Output per aggiornare il valore delle checkbox in tabella
    @Output() selectedTableValues: EventEmitter<any[]> = new EventEmitter<any[]
    >();

    //    Output per segnalare l'evento di sorting
    @Output() sortValues: EventEmitter<{ field: string, order: number }> = new EventEmitter<{ field: string, order: number }>();


    loading: boolean = false;
    pageIndex: number = 0
    paginatorData: PaginatorData
    //environment = environment

    constructor() {
        this.paginatorData = {
            first: 0,
            rows: this.nRowsPerPage > 0 ? this.nRowsPerPage : 5,
            totalRecords: this.totalRecords
        }
    }

    paginate(ev: any) {
        this.pageIndex = ev.first / ev.rows + 1 // Index of the new page if event.page not defined.

        let page_size_backend = this.value.length
        let page_size_frontend = ev.rows
        let current_page_frontend = this.pageIndex
        let total_count_be = this.allResponse.totalElements

        console.log('page_size_backend', page_size_backend)
        console.log('page_size_frontend', page_size_frontend)
        console.log('current_page_frontend', current_page_frontend)
        console.log('total_count_be', total_count_be)

        if (page_size_backend == page_size_frontend * current_page_frontend && page_size_backend < total_count_be) {

            this.pageIncrement += 1;
            this.pageIncrementChange.emit(this.pageIncrement)
            let pagination = {
                page: this.pageIncrement,
                size: 30
            }
            this.pageChanged.emit(pagination);
        }

    }

    ngOnInit() {
        console.log(this.value)
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['pageIncrement'])
            this.pageIncrement == 0 ? this.paginatorData.first = 0 : null
    }

    getFieldValue(data: { [key: string]: any }, field: string): any {
        // esempio con --> field country.name
        if (field) {
            const props = field.split("."); //[country, name] ---> [name] ----> []
            const prop = props.shift() as string; //country----> name

            if (props.length) {
                return this.getFieldValue(data[prop], props.join("."));
            }
            else {
                if (
                    data[prop] &&
                    data[prop].toString().length > 10 &&
                    typeof data[prop] == "number"
                ) {
                    let date =
                        new Date(data[prop]).getDay() +
                        "/" +
                        (new Date(data[prop]).getMonth() + 1) +
                        "/" +
                        new Date(data[prop]).getFullYear();
                    return date;
                } else {
                    if (data[prop]) {
                        return data[prop];
                    } else {
                        return '--';
                    }
                }
            }
        }
    }

    onPageChange(ev: any) {

        // console.log('dataTable',this.dataTable)
        console.log('pageChange', ev)

        let page_size_backend = this.allResponse.size
        let page_size_frontend = ev.first
        let current_page_frontend = ev.pageCount
        let total_count_be = this.allResponse.totalElements

        console.log('page_size_backend', page_size_backend)
        console.log('page_size_frontend', page_size_frontend)
        console.log('current_page_frontend', current_page_frontend)

        if (page_size_backend == page_size_frontend * current_page_frontend && page_size_backend < total_count_be) {

            this.pageChanged.emit(ev);
        }


    }

    selectedEvent() {
        this.selectedTableValues.emit(this.selectedValue);
    }

    emitSort(event: { field: string, order: number }): void {
      if(this.serverSort) {
      this.sortValues.emit(event);
      }
    }
}
