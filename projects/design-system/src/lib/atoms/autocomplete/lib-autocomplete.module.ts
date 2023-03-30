import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutocompleteComponent } from './components/autocomplete.component';



const primeComponents = [
    AutoCompleteModule,

];

const exportComponent = [
    AutocompleteComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [...primeComponents
        ,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...exportComponent
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibAutocompleteModule { }
