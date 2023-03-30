import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './components/button.component';

const primeComponents = [
  ButtonModule
];

const exportComponent = [
  ButtonComponent
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
export class LibButtonModule { }
