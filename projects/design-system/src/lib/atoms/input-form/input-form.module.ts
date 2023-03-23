import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibAutocompleteModule } from '../autocomplete/lib-autocomplete.module';
import { LibCalendarModule } from '../calendar/lib-calendar.module';
import { LibCheckboxModule } from '../checkbox/lib-checkbox.module';
import { LibDropdownModule } from '../dropdown/lib-dropdown.module';
import { LibErrorInlineModule } from '../error-inline/lib-error-inline.module';
import { LibInputModule } from '../input/lib-input.module';
import { LibRadioButtonModule } from '../radio-button/lib-radio-button.module';
import { LibTextareaModule } from '../textarea/lib-textarea.module';
import { InputFormComponent } from './components/input-form.component';


const primeComponents = [
    LibDropdownModule,
    LibCalendarModule,
    LibAutocompleteModule,
    LibCheckboxModule,
    LibRadioButtonModule,
    LibTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    LibInputModule,
    LibErrorInlineModule
];

const exportComponent = [
    InputFormComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents
    ],
    exports: [
        ...exportComponent,
        ...primeComponents
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class InputFormModule { }
