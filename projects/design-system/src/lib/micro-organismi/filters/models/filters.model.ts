import { TreeSelectModel } from "../../../atoms/tree-select/models/tree-select.model";



export interface FiltersModel {
    data?: TreeSelectModel[],
    placeholder: string,
    field: string,
    type: "calendar" | "treeselect"
}

export interface FiltersResult {
    [x: string]: string[] | number[] | Date[];
}
