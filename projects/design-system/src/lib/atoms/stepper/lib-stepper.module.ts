import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper.component';
import { StepsModule } from 'primeng/steps';

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
    CommonModule
  ],
  exports: [
    ...exportComponent,

  ],
  entryComponents: [
    ...exportComponent
  ]
})


export class LibStepperModule { }
