import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LibChipModule } from "../../atoms/chip/lib-chip.module";
import { FiltersComponent } from "./components/filters/filters.component";
import { LibTreeSelectModule } from "../../atoms/tree-select/lib-tree-select.module";
import { LibCalendarModule } from "../../atoms/calendar/lib-calendar.module";
import { FiltersChipsComponent } from './components/filters-chips/filters-chips.component';
import { OnlyFiltersComponent } from './components/only-filters/only-filters.component';
import { TreeSelectModule } from "primeng/treeselect";

const primeComponents = [
    LibTreeSelectModule,
    LibChipModule
];

const exportComponent = [
    FiltersComponent,
    FiltersChipsComponent,
    OnlyFiltersComponent,
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
        LibCalendarModule,
        TreeSelectModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibFiltersModule { }
