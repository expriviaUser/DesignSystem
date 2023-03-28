import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DropdownComponent } from '../../../atoms/dropdown/components/dropdown.component';
import { DropdownType } from '../../../atoms/dropdown/models/dropdown.model';

@Component({
    selector: 'lib-filtri',
    templateUrl: './filtri.component.html',
    styleUrls: ['./filtri.component.scss']
})
export class FiltriComponent implements OnInit {

    @Input() dropdownValues: DropdownType[][] = [];

    @Output() filterValues: EventEmitter<string[]> = new EventEmitter<string[]>();

    @ViewChildren('dropdown') dropdown!: QueryList<DropdownComponent>;

    chipsList: { value: string, dropdownIndex: number }[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    createChip(event: string, dropdownIndex: number): void {
        if (event) {
            this.chipsList = this.chipsList.filter(chip => chip.dropdownIndex != dropdownIndex);
            this.chipsList.push({ value: event, dropdownIndex: dropdownIndex });
            this.chipsList.sort((a, b) => a.dropdownIndex - b.dropdownIndex);
            const VALUES = this.chipsList.map((chip) => chip.value);
            this.filterValues.emit(VALUES);
        }
    }

    resetDropdown(chipIndex: number, chipValue: { value: string, dropdownIndex: number }): void {
        // this.dropdown.toArray()[chipValue.dropdownIndex].resetDropdown();
    }

}
