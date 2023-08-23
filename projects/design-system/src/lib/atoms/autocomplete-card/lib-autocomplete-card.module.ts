import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { LibAddressModule } from '../address/lib-address.module';
import { AutocompleteCardComponent } from './components/autocomplete-card.component';


const primeComponents = [
    AutoCompleteModule,

];

const exportComponent = [
    AutocompleteCardComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LibAddressModule
    ],
    exports: [
        ...exportComponent
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibAutocompleteCardModule { }
