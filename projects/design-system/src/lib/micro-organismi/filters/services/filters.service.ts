import { Injectable } from '@angular/core';
import { OnlyFiltersChip } from '../models/filters.model';
import { TreeSelectModel } from '../../../atoms/tree-select/models/tree-select.model';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {
    constructor() { }

    getFiltersResult(event: OnlyFiltersChip, filtersResult: OnlyFiltersChip[]) {
        let indexFilter = filtersResult.findIndex(item => item.id == event.id);
        if (indexFilter < 0)
            filtersResult.push(event);
        else {
            filtersResult[indexFilter].result = event.result;
            filtersResult[indexFilter].data = event.data;
        }

        return filtersResult;
    }


    removeFiltersChip(event: OnlyFiltersChip, filtersResult: OnlyFiltersChip[]) {
        let indexFilter = filtersResult.findIndex(item => item.id == event.id);
        if (indexFilter >= 0) {
            let indexToRemoveResult = filtersResult[indexFilter].result.findIndex(item => item.chipsLabel == event.result[0].chipsLabel);
            filtersResult[indexFilter].result.splice(indexToRemoveResult, 1);
            if (Array.isArray(filtersResult[indexFilter].data[event.result[0].dropdownIndex])) {
                const temp = filtersResult[indexFilter].data[event.result[0].dropdownIndex] as TreeSelectModel[];
                let indexToRemoveData = temp.findIndex(item => item.label == event.result[0].chipsLabel);
                temp.splice(indexToRemoveData, 1);
            } else if (typeof filtersResult[indexFilter].data[event.result[0].dropdownIndex] === 'object') {
                filtersResult[indexFilter].data[event.result[0].dropdownIndex] = [];
            }
        }

        return filtersResult;
    }
}
