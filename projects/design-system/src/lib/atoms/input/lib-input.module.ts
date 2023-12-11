import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputComponent } from './components/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
    CommonModule,
    FormsModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})

export class LibInputModule { }
