import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputComponent } from './components/input.component';
import { CommonModule } from '@angular/common';


const primeComponents = [
  InputTextModule,
  InputNumberModule
];

const exportComponent = [
  InputComponent
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

export class LibInputModule { }
