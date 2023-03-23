import { NgModule } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TextareaComponent } from './components/textarea.component';

const primeComponents = [
    InputTextareaModule
];

const exportComponent = [
    TextareaComponent
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

export class LibTextareaModule { }
