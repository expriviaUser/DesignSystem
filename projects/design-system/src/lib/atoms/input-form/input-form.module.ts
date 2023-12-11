import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibAutocompleteModule } from '../autocomplete/lib-autocomplete.module';
import { LibCalendarModule } from '../calendar/lib-calendar.module';
import { LibCheckboxModule } from '../checkbox/lib-checkbox.module';
import { LibChooseFileModule } from '../choose-file/choose-file.module';
import { LibDropdownModule } from '../dropdown/lib-dropdown.module';
import { LibErrorInlineModule } from '../error-inline/lib-error-inline.module';
import { LibInputModule } from '../input/lib-input.module';
import { LibRadioButtonModule } from '../radio-button/lib-radio-button.module';
import { LibTextareaModule } from '../textarea/lib-textarea.module';
import { InputFormComponent } from './components/input-form.component';
import { LibAutocompleteCardModule } from '../autocomplete-card/lib-autocomplete-card.module';
import { LibListboxModule } from '../listbox/lib-listbox.module';
import { LibMultiSelectModule } from '../multi-select/lib-multi-select.module';
import {LibButtonModule} from "../button/lib-button.module";


const primeComponents = [
    LibDropdownModule,
    LibCalendarModule,
    LibAutocompleteModule,
    LibCheckboxModule,
    LibRadioButtonModule,
    LibTextareaModule,
    LibInputModule,
    LibErrorInlineModule,
    LibChooseFileModule,
    LibAutocompleteCardModule,
    LibListboxModule,
    LibMultiSelectModule,
    LibButtonModule
];

const exportComponent = [
    InputFormComponent
];

@NgModule({
    declarations: [
        ...exportComponent,
    ],
  imports: [
    ...primeComponents,
    CommonModule,
  ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ],
    providers: [DatePipe]
})
export class InputFormModule { }
