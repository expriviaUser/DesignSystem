import { TreeSelectModel } from "../../../atoms/tree-select/models/tree-select.model";



export interface FiltersModel {
    data?: FiltersData[],
    placeholder: string,
    field: string,
    type: "calendar" | "treeselect" | "children",
    selectionType?: "single" | "multiple" | "checkbox",
}

export interface FiltersData extends TreeSelectModel {
    type?: string,
    enumValues?: TreeSelectModel[],
    config?: {
        [x: string]: any
    }
}

export interface OnlyFiltersModel {
    id: number,
    filters: FiltersModel[]
}

export interface FiltersResult {
    [x: string]: string[] | number[] | Date[];
}

export interface FiltersChip {
    value: string,
    dropdownIndex: number,
    field: string,
    data: string | number | Array<object>,
    type: "treeselect" | "calendar" | 'children'
}

export interface OnlyFiltersChip {
    id: number,
    result: FiltersChip[],
    data: TreeSelectModel[][]
}
