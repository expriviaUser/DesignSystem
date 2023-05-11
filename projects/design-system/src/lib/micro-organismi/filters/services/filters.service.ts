import { Injectable } from '@angular/core';
import { OnlyFiltersChip } from '../models/filters.model';
import { TreeSelectModel } from '../../../atoms/tree-select/models/tree-select.model';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {
    data: TreeSelectModel[][] = [];
    constructor() { }

    getFiltersResult(event: OnlyFiltersChip, filtersResult: OnlyFiltersChip[]) {
        let indexFilter = filtersResult.findIndex(item => item.id == event.id);
        if (indexFilter < 0)
            filtersResult.push(event);
        else {
            filtersResult[indexFilter].result = event.result;
            // filtersResult[indexFilter].data = event.data;
        }

        return filtersResult;
    }

    removeFiltersChip(event: OnlyFiltersChip, filtersResult: OnlyFiltersChip[]) {
        let indexFilter = filtersResult.findIndex(item => item.id == event.id);
        if (indexFilter >= 0) {
            filtersResult[indexFilter].result.splice(event.result[0].dropdownIndex);
            //let indexToRemoveData = filtersResult[indexFilter].data[event.result[0].dropdownIndex].findIndex(item => item.label == event.result[0].value);
            //filtersResult[indexFilter].data[event.result[0].dropdownIndex].splice(indexToRemoveData, 1);
        }

        return filtersResult;
    }
}
