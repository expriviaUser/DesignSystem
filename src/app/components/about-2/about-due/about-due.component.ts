import { Component } from '@angular/core';
import { AccordionData, TreeMenu } from '@expriviauser/design-system';
import { TreeNode } from 'primeng/api';
import { TreeSelectModel } from 'projects/design-system/src/public-api';

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

  structuresList: Array<TreeSelectModel> = [
    { data: 1, label: '1', draggable: true, children: [{data: 4, label: '6'}] },
    { data: 2, label: '2', children: [] },
    { data: 3, label: '3', children: [] },
  ];

  lazyLoad(data: TreeNode) {

    data.children = [
      { data: 4, label: '4', leaf: true, draggable: true }
    ]

  }

  selectedStructures: Array<any> = [];

  log(event: any) {
    console.log(event);
  }
}
