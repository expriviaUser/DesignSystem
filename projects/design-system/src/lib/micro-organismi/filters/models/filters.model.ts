import { TreeSelectModel } from "../../../atoms/tree-select/models/tree-select.model";
import { TreeMenu } from "../../../atoms/treemenu/models/treemenu.model";



export interface FiltersModel {
  data?: FiltersData[],
  placeholder: string,
  field: string,
  type: "calendar" | "treeselect" | "children" | "dialog" | 'dropdown',
  selectionType?: "single" | "multiple" | "checkbox",
  calendarSelectionType?: "single" | "range",
  filter?: boolean,
  addFilterButtonLabel?: string,
  children?: any,
  propagateSelection?: { down: boolean, up: boolean }
}

export interface FiltersData extends TreeSelectModel {
  type?: string,
  disabled?: boolean,
  enumValues?: TreeSelectModel[],
  key?: string,
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
  chipsLabel: string,
  dropdownIndex: number,
  field: string,
  data: string | number | Array<object>,
  type: "treeselect" | "calendar" | 'children' | 'dialog' | 'dropdown',
  value: string
}

export interface OnlyFiltersChip {
  id: number,
  result: FiltersChip[],
  data: any
}
