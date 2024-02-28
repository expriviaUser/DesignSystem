export interface TreeSelectModel {
    label: string,
    data: string | number,
    expanded?: boolean,
    draggable?: boolean,
    selectable?: boolean,
    children?: TreeSelectModel[]
}
