import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplaceModule } from 'primeng/inplace';
import { InplaceComponent } from './components/inplace.component';

const primeComponents = [
  InplaceModule
];

const exportComponent = [
  InplaceComponent
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

export class LibInplaceModule { }
