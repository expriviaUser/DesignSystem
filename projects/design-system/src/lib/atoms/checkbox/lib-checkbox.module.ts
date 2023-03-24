import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxButtonComponent } from './components/checkbox-button.component';



const primeComponents = [
    CheckboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

const exportComponent = [
    CheckboxButtonComponent
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
export class LibCheckboxModule { }
