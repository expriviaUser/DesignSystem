import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TextareaComponent } from './components/textarea.component';

const primeComponents = [
    InputTextareaModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
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
