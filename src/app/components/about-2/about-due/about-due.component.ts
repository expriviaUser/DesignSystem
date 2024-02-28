import { Component } from '@angular/core';

@Component({
  selector: 'app-about-due',
  templateUrl: './about-due.component.html',
  styleUrls: ['./about-due.component.scss']
})
export class AboutDueComponent {
  items = [{ label: 'Ciao4' }, { label: 'Ciao3' }]
  items2 = [{ label: 'Ciao' }, { label: 'Ciao2' }]


  console(event: any) {
    console.log(event);
  }

}
