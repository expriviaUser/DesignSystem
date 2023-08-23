import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelectComponent } from './components/multi-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const primeComponents = [
    MultiSelectModule
];

const exportComponent = [
    MultiSelectComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibMultiSelectModule { }
