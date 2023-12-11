import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { TextareaComponent } from './components/textarea.component';

const primeComponents = [
  InputTextareaModule,

];

const exportComponent = [
  TextareaComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})

export class LibTextareaModule { }
