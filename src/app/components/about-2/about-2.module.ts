import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibAccordionModule, LibBreadcrumbModule, LibMultiSelectModule, LibPickListModule, LibTreeSelectModule, LibTreemenuModule } from 'projects/design-system/src/public-api';
import { About2RoutingModule } from './about-2-routing.module';
import { AboutDueComponent } from './about-due/about-due.component';
import { CaricamentoComponent } from './caricamento/caricamento.component';



@NgModule({
  declarations: [
    AboutDueComponent,
    CaricamentoComponent
  ],
  imports: [
    CommonModule,
    About2RoutingModule,
    LibBreadcrumbModule,
    LibPickListModule,
    LibAccordionModule,
    LibTreemenuModule,
    LibMultiSelectModule,
    LibTreeSelectModule
  ]
})
export class About2Module { }
