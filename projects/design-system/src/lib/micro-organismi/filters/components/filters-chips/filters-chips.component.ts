import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FiltersChip, OnlyFiltersChip } from '../../models/filters.model';

@Component({
    selector: 'lib-filters-chips',
    templateUrl: './filters-chips.component.html',
    styleUrls: ['./filters-chips.component.scss']
})
export class FiltersChipsComponent {
    @Input() chipsList: OnlyFiltersChip[] = [];

    @Output() onRemove: EventEmitter<OnlyFiltersChip> = new EventEmitter<OnlyFiltersChip>();

    resetDropdown(chipValue: FiltersChip, filterIndex: number): void {
        this.onRemove.emit({ id: filterIndex, result: [chipValue], data: this.chipsList[filterIndex].data });
    }
}
