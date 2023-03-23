import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton'
import { RadioButtonComponent } from './components/radio-button.component';

const primeComponents = [
    RadioButtonModule
];

const exportComponent = [
    RadioButtonComponent
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

export class LibRadioButtonModule { }
