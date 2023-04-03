import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren
} from '@angular/core';
import {TreeSelectModel} from "../../../atoms/tree-select/models/tree-select.model";
import {TreeSelectComponent} from "../../../atoms/tree-select/components/tree-select.component";
import {FiltriModel} from "../models/filtri.model";

@Component({
    selector: 'lib-filtri',
    templateUrl: './filtri.component.html',
    styleUrls: ['./filtri.component.scss']
})
export class FiltriComponent implements OnInit {

    @Input() dropdownValues: FiltriModel[] = [];
    @Input() inputSelectedValues: TreeSelectModel[][] = [];

    selectedValues: TreeSelectModel[][] = [];
    @Output() filterValues: EventEmitter<string[]> = new EventEmitter<string[]>();

    @ViewChildren('dropdown') dropdown!: QueryList<TreeSelectComponent>;

    chipsList: { value: string, dropdownIndex: number }[] = [];

    constructor() {
    }

    ngOnInit(): void {
        if (this.inputSelectedValues) {
            this.selectedValues = this.inputSelectedValues;
        }
    }


    createChip(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number): void {
        if (event.node) {
            //this.chipsList = this.chipsList.filter(chip => chip.dropdownIndex != dropdownIndex);
            this.chipsList.push({value: event.node.data, dropdownIndex: dropdownIndex});
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            const VALUES = this.chipsList.map((chip) => chip.value);
            this.filterValues.emit(VALUES);
            if(this.selectedValues[dropdownIndex]==undefined || this.selectedValues[dropdownIndex].length == 0){
                this.selectedValues[dropdownIndex] = [];
            }
            this.selectedValues[dropdownIndex].push(event.node);
        }
    }

    unselectOption(event: { originalEvent: PointerEvent, node: TreeSelectModel }, dropdownIndex: number): void {
        const C_INDEX = this.chipsList.findIndex(c => c.value == event.node.data);
        this.chipsList.splice(C_INDEX, 1);
        const N_INDEX = this.selectedValues[dropdownIndex].indexOf(event.node);
        this.selectedValues[dropdownIndex].splice(N_INDEX, 1);
    }

    resetDropdown(chipIndex: number, chipValue: { value: string, dropdownIndex: number }): void {
        this.chipsList.splice(chipIndex, 1);
        const N_INDEX = this.selectedValues[chipValue.dropdownIndex].findIndex(n => n.data == chipValue.value);
        this.selectedValues[chipValue.dropdownIndex].splice(N_INDEX, 1);
        this.selectedValues[chipValue.dropdownIndex] = [...this.selectedValues[chipValue.dropdownIndex]];
    }

}
