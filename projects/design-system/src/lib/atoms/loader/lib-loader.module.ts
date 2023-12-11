import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const primeComponents = [
    ProgressSpinnerModule
];

const exportComponent = [
    LoaderComponent
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

export class LibLoaderModule { }
