import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutocompleteComponent } from './components/autocomplete.component';



const primeComponents = [
    AutoCompleteModule
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
