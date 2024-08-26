import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'nowDate'
})
export class NowDatePipe implements PipeTransform {

  transform(date: Date, localeLang: string): string {
    return moment(date).locale(localeLang).fromNow();
  }

}
