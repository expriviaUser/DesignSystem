import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address.component';
import { LibCardModule } from '../card/lib-card.module';
import { LibButtonModule } from '../button/lib-button.module';


const primeComponents = [


];

const exportComponent = [
    AddressComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        //...primeComponents,
        CommonModule,
        LibCardModule,
        LibButtonModule
    ],
    exports: [
        ...exportComponent
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibAddressModule { }
