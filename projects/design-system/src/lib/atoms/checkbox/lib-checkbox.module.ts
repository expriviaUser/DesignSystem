import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxButtonComponent } from './components/checkbox-button.component';



const primeComponents = [
    CheckboxModule
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
