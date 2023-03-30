import { RadioTileComponent } from './components/radio-tile.component';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibCardModule } from '../../atoms/card/lib-card.module';

const primeComponents = [
    LibCardModule,
    RadioButtonModule,
    ButtonModule
];

const exportComponent = [
    RadioTileComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibRadioTileModule { }
