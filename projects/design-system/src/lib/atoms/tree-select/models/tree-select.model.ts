export interface TreeSelectModel {
    label: string,
    data: string | number,
    expanded?: boolean,
    draggable?: boolean,
    selectable?: boolean,
    key?: string,
    children?: TreeSelectModel[]
}
