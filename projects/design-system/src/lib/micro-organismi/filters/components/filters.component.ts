import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren
} from '@angular/core';
import { TreeSelectModel } from "../../../atoms/tree-select/models/tree-select.model";
import { TreeSelectComponent } from "../../../atoms/tree-select/components/tree-select.component";
import { FiltersModel, FiltersResult } from "../models/filters.model";

@Component({
    selector: 'lib-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    @Input() dropdownValues: FiltersModel[] = [];
    @Input() inputSelectedValues: TreeSelectModel[][] = [];

    selectedValues: TreeSelectModel[][] = [];
    @Output() filterValues: EventEmitter<FiltersResult> = new EventEmitter<FiltersResult>();

    chipsList: { value: string, dropdownIndex: number, field: string, data: string | number }[] = [];
    chipsExport: any = {};

    constructor() {
    }

    ngOnInit(): void {
        if (this.inputSelectedValues) {
            this.selectedValues = this.inputSelectedValues;
        }
        this.dropdownValues.forEach((item) => this.chipsExport[item.field] = []);
    }


    createChip(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string): void {
        if (event.node) {
            this.chipsList.push({ value: event.node.label, dropdownIndex: dropdownIndex, field: dropdownField, data: event.node.data });
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            this.chipsExport[dropdownField].push(event.node.data);
            this.filterValues.emit(this.chipsExport);
            if (this.selectedValues[dropdownIndex] == undefined || this.selectedValues[dropdownIndex].length == 0) {
                this.selectedValues[dropdownIndex] = [];
            }
            this.selectedValues[dropdownIndex].push(event.node);
        }
    }

    unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number, dropdownField: string): void {
        const C_INDEX = this.chipsList.findIndex(c => c.value == event.node.label);
        this.chipsList.splice(C_INDEX, 1);
        const E_INDEX = this.chipsExport[dropdownField].findIndex((d: string) => d == event.node.data);
        this.chipsExport[dropdownField].splice(E_INDEX, 1);
        this.filterValues.emit(this.chipsExport);
        const N_INDEX = this.selectedValues[dropdownIndex].indexOf(event.node);
        this.selectedValues[dropdownIndex].splice(N_INDEX, 1);
    }

    resetDropdown(chipIndex: number, chipValue: { value: string, dropdownIndex: number, field: string, data: string | number }): void {
        this.chipsList.splice(chipIndex, 1);
        const E_INDEX = this.chipsExport[chipValue.field].findIndex((d: string) => d == chipValue.data); //add data to chipValue
        this.filterValues.emit(this.chipsExport);
        this.chipsExport[chipValue.field].splice(E_INDEX, 1);
        const N_INDEX = this.selectedValues[chipValue.dropdownIndex].findIndex(n => n.label == chipValue.value);
        this.selectedValues[chipValue.dropdownIndex].splice(N_INDEX, 1);
        this.selectedValues[chipValue.dropdownIndex] = [...this.selectedValues[chipValue.dropdownIndex]];
    }

}
