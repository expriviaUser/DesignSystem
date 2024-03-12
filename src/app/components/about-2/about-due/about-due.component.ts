import { Component } from '@angular/core';
import { AccordionData, TreeMenu } from '@expriviauser/design-system';

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

  accordionData: Array<AccordionData> = [
    { header: '1' },
    { header: '2' },
    { header: '3' },
    { header: '4' },
  ]

   structuresList: Array<TreeMenu> = [
    {data: 1, label: '1', children: [{data: 2, label: '2'}]},
    {data: 3, label: '3', children: [{data: 4, label: '4'}]},
    {data: 5, label: '5', children: [{data: 6, label: '6'}]},
  ];

  selectedStructures: Array<TreeMenu> = [];

  vaffanculo(event: any) {
    console.log(event);
  }
 }
