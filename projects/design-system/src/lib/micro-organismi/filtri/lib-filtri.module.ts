import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LibChipModule } from "../../atoms/chip/lib-chip.module";
import { FiltriComponent } from "./components/filtri.component";
import {LibTreeSelectModule} from "../../atoms/tree-select/lib-tree-select.module";

const primeComponents = [
  LibTreeSelectModule,
  LibChipModule
];

const exportComponent = [
  FiltriComponent
];

@NgModule({
  declarations: [
    ...exportComponent,
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibTreeSelectModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})
export class LibFiltriModule { }
