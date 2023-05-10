import { TreeSelectModel } from "../../../atoms/tree-select/models/tree-select.model";



export interface FiltersModel {
    data?: TreeSelectModel[],
    placeholder: string,
    field: string,
    type: "calendar" | "treeselect",
    selectionType?: "single" | "multiple" | "checkbox"
}

export interface OnlyFiltersModel {
    id: number,
    filters: FiltersModel[]
}

export interface FiltersResult {
    [x: string]: string[] | number[] | Date[] | string;
}

export interface FiltersChip {
    value: string,
    dropdownIndex: number,
    field: string,
    data: string | number | Array<object>,
    type: "treeselect" | "calendar"
}

export interface OnlyFiltersChip {
    id: number,
    result: FiltersChip[],
    data: TreeSelectModel[][]
}
