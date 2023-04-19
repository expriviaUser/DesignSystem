import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LibChipModule } from "../../atoms/chip/lib-chip.module";
import { FiltersComponent } from "./components/filters.component";
import {LibTreeSelectModule} from "../../atoms/tree-select/lib-tree-select.module";
import {LibCalendarModule} from "../../atoms/calendar/lib-calendar.module";

const primeComponents = [
  LibTreeSelectModule,
  LibChipModule
];

const exportComponent = [
  FiltersComponent
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
    LibTreeSelectModule,
    LibCalendarModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})
export class LibFiltersModule { }
