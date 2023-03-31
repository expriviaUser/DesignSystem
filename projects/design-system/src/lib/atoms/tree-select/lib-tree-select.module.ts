import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TreeSelectModule} from "primeng/treeselect";
import { TreeSelectComponent} from "./components/tree-select.component";

const primeComponents = [
  TreeSelectModule,

];

const exportComponent = [
  TreeSelectComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})

export class LibTreeSelectModule { }
