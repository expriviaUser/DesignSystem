import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibTableService {
  private datePipe: DatePipe = new DatePipe('it-IT');
  constructor() {

  }

  getFieldValue(data: { [key: string]: any }, field: string, forceDate = false, dateFormat: string = 'dd/MM/yyyy'): any {
    // Example with --> field country.name
    if (data) {

      if (field) {
        const props = field.split("."); //[country, name] ---> [name] ----> []
        const prop = props.shift() as string; //country----> name

        if (props.length) {
          return this.getFieldValue(data[prop], props.join("."));
        }
        else {
          //If you pass a timestamp it will has milliseconds and you have to enable forceDate
          const date = new Date(data[prop]);

          if ((typeof data[prop] === 'number' || typeof data[prop] === 'boolean') && !forceDate) {
            return data[prop];
          } else if (!isNaN(date.getTime())) {
            return this.datePipe.transform(data[prop], dateFormat);
          } else {
            if (data[prop] != null) {
              return data[prop];
            }
          }
        }
      }
    }

    return '';
  }
}
