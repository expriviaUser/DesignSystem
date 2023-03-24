import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCircleComponent } from './components/icon-circle.component';
import { TooltipModule } from 'primeng/tooltip';


const primeComponents = [
    TooltipModule
];

const exportComponent = [
    IconCircleComponent
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
        ...primeComponents
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class LibIconCircleModule { }
