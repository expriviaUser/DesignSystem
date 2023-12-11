import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SwitchComponent } from './components/switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const primeComponents = [
    InputSwitchModule,

];

const exportComponent = [
    SwitchComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        ...exportComponent,

    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class SwitchModule { }
