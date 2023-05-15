import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FiltersChip, OnlyFiltersChip } from '../../models/filters.model';

@Component({
    selector: 'lib-filters-chips',
    templateUrl: './filters-chips.component.html',
    styleUrls: ['./filters-chips.component.scss']
})
export class FiltersChipsComponent {
    @Input() chipsList: OnlyFiltersChip[] = [];
    @Input() title: string = 'Filtri attivi';

    @Output() onRemove: EventEmitter<OnlyFiltersChip> = new EventEmitter<OnlyFiltersChip>();

    get resultsActive(): boolean {
        return (this.chipsList.filter(item => item.result.length > 0).length > 0);
    }

    resetDropdown(chipValue: FiltersChip, filterId: number): void {
        this.onRemove.emit({ id: filterId, result: [chipValue], data: [] });
    }
}
