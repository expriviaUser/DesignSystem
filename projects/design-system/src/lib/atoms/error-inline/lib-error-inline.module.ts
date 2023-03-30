import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInlineComponent } from './components/error-inline.component';


const primeComponents = [
    CommonModule
];

const exportComponent = [
    ErrorInlineComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
     imports: [ ...primeComponents
         
    ],
    exports: [
        ...exportComponent,
         
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class LibErrorInlineModule { }
