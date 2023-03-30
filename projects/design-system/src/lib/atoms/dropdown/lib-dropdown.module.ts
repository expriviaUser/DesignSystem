import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './components/dropdown.component';


const primeComponents = [
  DropdownModule
];

const exportComponent = [
  DropdownComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})

export class LibDropdownModule { }
