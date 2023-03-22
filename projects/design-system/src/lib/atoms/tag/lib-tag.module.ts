import { TagModule } from 'primeng/tag';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag.component';

const primeComponents = [
  TagModule
];

const exportComponent = [
  TagComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    CommonModule,
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
export class LibTagModule { }
