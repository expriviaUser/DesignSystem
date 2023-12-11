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
import { LibDropdownModule } from "../../atoms/dropdown/lib-dropdown.module";
import { LibInputModule } from "../../atoms/input/lib-input.module";
import { LibButtonModule } from "../../atoms/button/lib-button.module";
import { LibDialogModule } from "../../atoms/dialog/lib-dialog.module";
import { LibTreemenuModule } from "../../atoms/treemenu/lib-treemenu.module";

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
        TreeSelectModule,
        LibDropdownModule,
        LibInputModule,
        LibButtonModule,
        LibDialogModule,
        LibTreemenuModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibFiltersModule { }
