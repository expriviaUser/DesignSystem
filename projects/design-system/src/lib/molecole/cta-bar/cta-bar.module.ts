import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaBarComponent } from './components/cta-bar.component';
import { ButtonModule } from 'primeng/button';


const primeComponents = [
    ButtonModule
];

const exportComponent = [
    CtaBarComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
     imports: [ ...primeComponents
         ,
        CommonModule
    ],
    exports: [
        ...exportComponent,
         
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class CtaBarModule { }
