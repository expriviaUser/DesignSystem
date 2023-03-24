import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Cols } from "../../models/table.model";



@Component({
    selector: "lib-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
    @Input() value!: any[];

    @Input() actions?: TemplateRef<any>;

    @Input() columns!: Cols[];
    @Input() isSelectable: boolean = false
    @Input() allResponse!: any;
    @Input() pageNumberBe: number = 0
    @Output() pageNumberBeChange = new EventEmitter<number>()

    @Output() selectedTableValue: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() pageChanged = new EventEmitter<any>();

    @Input() paginator: boolean = true;

    isMobile?: boolean;

    destroySub$ = new Subject<void>();

    constructor() { }

    ngOnInit() {
    }
    pageChangedValue(ev: any) {
        this.pageChanged.emit(ev);
        this.pageNumberBeChange.emit(ev.page)
    }

    ngOnDestroy() {
        this.destroySub$.next();
        this.destroySub$.complete();
    }

    onSelectedValues(ev: Record<string, any>[]) {
        console.log(ev);
        this.selectedTableValue.emit(ev);
    }
}
