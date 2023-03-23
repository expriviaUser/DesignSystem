import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './components/dropdown.component';


const primeComponents = [
    DropdownModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
];

const exportComponent = [
    DropdownComponent
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

export class LibDropdownModule { }
