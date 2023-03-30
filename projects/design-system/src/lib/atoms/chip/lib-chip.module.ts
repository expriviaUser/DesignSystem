import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { ChipComponent } from './components/chip.component';

const primeComponents = [
    ChipModule
];

const exportComponent = [
    ChipComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule
    ],
    exports: [
        ...exportComponent,

    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibChipModule { }
