import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { ListboxComponent } from './components/listbox.component';
import { FormsModule } from '@angular/forms';

const primeComponents = [
  ListboxModule
];

const exportComponent = [
  ListboxComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    FormsModule,
    CommonModule
  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})

export class LibListboxModule { }
