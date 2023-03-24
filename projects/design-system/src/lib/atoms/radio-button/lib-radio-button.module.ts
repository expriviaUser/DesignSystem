import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton'
import { RadioButtonComponent } from './components/radio-button.component';

const primeComponents = [
    RadioButtonModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
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
