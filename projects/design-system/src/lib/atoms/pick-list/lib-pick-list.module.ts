import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListModule } from 'primeng/picklist';
import { PickListComponent } from './components/pick-list.component';

const primeComponents = [
    PickListModule
];

const exportComponent = [
    PickListComponent
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
export class LibPickListModule { }
