import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputComponent } from './components/input.component';


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
    ...primeComponents
  ],
  exports: [
    ...exportComponent,
    ...primeComponents
  ],
  entryComponents: [
    ...exportComponent
  ]
})

export class LibInputModule { }
