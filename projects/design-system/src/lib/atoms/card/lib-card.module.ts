import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardComponent } from './components/card.component';

const primeComponents = [
  CardModule
];

const exportComponent = [
  CardComponent
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
export class LibCardModule { }
