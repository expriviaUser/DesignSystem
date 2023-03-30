import { TagModule } from 'primeng/tag';
import { NgModule } from '@angular/core';
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
  imports: [...primeComponents

  ],
  exports: [
    ...exportComponent,
  ],
  entryComponents: [
    ...exportComponent
  ]
})
export class LibTagModule { }
