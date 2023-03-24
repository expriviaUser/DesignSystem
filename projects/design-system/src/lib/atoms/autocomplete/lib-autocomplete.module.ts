import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutocompleteComponent } from './components/autocomplete.component';



const primeComponents = [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

const exportComponent = [
    AutocompleteComponent
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
export class LibAutocompleteModule { }
