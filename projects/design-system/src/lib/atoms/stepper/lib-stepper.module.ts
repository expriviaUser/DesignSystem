import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper.component';
import { StepsModule } from 'primeng/steps';
import { LibButtonModule } from '../button/lib-button.module';
import { CtaBarModule } from '../../molecole/cta-bar/cta-bar.module';

const primeComponents = [
  StepsModule,

];

const exportComponent = [
  StepperComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    LibButtonModule,
    CtaBarModule
  ],
  exports: [
    ...exportComponent,

  ],
  entryComponents: [
    ...exportComponent
  ]
})


export class LibStepperModule { }
