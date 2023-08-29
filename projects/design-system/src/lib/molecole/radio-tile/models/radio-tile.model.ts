export interface RadioTile {
    id: number,
    showHeaderAction: boolean,
    title: string,
    content: string,
    radio: {
        radioName: string,
        radioValue: string,
        radioDisabled: boolean,
    }
    [x: string]: any
}