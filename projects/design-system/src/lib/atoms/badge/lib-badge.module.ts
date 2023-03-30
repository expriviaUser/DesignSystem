import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { BadgeComponent } from './components/badge.component';

const primeComponents = [
    BadgeModule
  ];
  
  const exportComponent = [
    BadgeComponent
  ];
  
  @NgModule({
    declarations: [
      ...exportComponent
    ],
     imports: [ ...primeComponents
       ,
      CommonModule
    ],
    exports: [
      ...exportComponent
    ],
    entryComponents: [
      ...exportComponent
    ]
  })

export class LibBadgeModule { }
