import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginatorComponent} from "./components/paginator.component";
import {PaginatorModule} from "primeng/paginator";



const primeComponents = [


];

const exportComponent = [
  PaginatorComponent
];

@NgModule({
    declarations: [
        ...exportComponent,

    ],
  imports: [
    //...primeComponents,
    CommonModule,
    PaginatorModule
  ],
    exports: [
        ...exportComponent
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibPaginatorModule { }
