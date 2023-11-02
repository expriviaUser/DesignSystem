import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './components/accordion.component';
import {AccordionModule} from "primeng/accordion";
import {TabViewModule} from "primeng/tabview";



const primeComponents = [


];

const exportComponent = [
  AccordionComponent
];

@NgModule({
    declarations: [
        ...exportComponent,

    ],
  imports: [
    //...primeComponents,
    CommonModule,
    AccordionModule,
    TabViewModule
  ],
    exports: [
        ...exportComponent
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibAccordionModule { }
