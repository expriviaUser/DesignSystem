export type ActionTable = {
    label: string;
    command?: (row: any) => any;
    items?: ActionTable[];
    type?: string
};

export type PaginatorData = {
    first: number
    rows: number;
    totalRecords: number;
}

export interface Cols {
    header: string;
    field: string;
    sort?: boolean;
}