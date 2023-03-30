import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LibChipModule } from "../../atoms/chip/lib-chip.module";
import { LibDropdownModule } from "../../atoms/dropdown/lib-dropdown.module";
import { FiltriComponent } from "./components/filtri.component";

const primeComponents = [
  LibDropdownModule,
  LibChipModule
];

const exportComponent = [
  FiltriComponent
];

@NgModule({
  declarations: [
    ...exportComponent,
  ],
   imports: [ ...primeComponents
     ,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibDropdownModule
  ],
  exports: [
    ...exportComponent,
     
  ],
  entryComponents: [
    ...exportComponent
  ]
})
export class LibFiltriModule { }
