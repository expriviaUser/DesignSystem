import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LibTableService {

    constructor() { }

    getFieldValue(data: { [key: string]: any }, field: string): any {
        // esempio con --> field country.name
        if (field) {
            const props = field.split("."); //[country, name] ---> [name] ----> []
            const prop = props.shift() as string; //country----> name

            if (props.length) {
                return this.getFieldValue(data[prop], props.join("."));
            }
            else {
                if (
                    data[prop] &&
                    data[prop].toString().length > 10 &&
                    typeof data[prop] == "number"
                ) {
                    let date =
                        new Date(data[prop]).getDay() +
                        "/" +
                        (new Date(data[prop]).getMonth() + 1) +
                        "/" +
                        new Date(data[prop]).getFullYear();
                    return date;
                } else {
                    if (data[prop]) {
                        return data[prop];
                    } else {
                        return '--';
                    }
                }
            }
        }
    }
}
