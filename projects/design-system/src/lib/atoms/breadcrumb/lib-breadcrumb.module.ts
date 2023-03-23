import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './components/breadcrumb.component';

const primeComponents = [
  BreadcrumbModule
];

const exportComponent = [
  BreadcrumbComponent
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
export class LibBreadcrumbModule { }
