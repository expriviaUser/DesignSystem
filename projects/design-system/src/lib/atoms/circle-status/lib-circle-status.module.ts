import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleStatusComponent } from './components/circle-status.component';



/* const primeComponents = [
    

]; */

const exportComponent = [
    CircleStatusComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        //...primeComponents,
        CommonModule,
    ],
    exports: [
        ...exportComponent
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibCircleStatusModule { }
