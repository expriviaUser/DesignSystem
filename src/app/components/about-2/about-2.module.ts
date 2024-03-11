import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibBreadcrumbModule, LibMultiSelectModule, LibPickListModule } from 'projects/design-system/src/public-api';
import { About2RoutingModule } from './about-2-routing.module';
import { AboutDueComponent } from './about-due/about-due.component';
import { CaricamentoComponent } from './caricamento/caricamento.component';
import { LibAccordionModule, LibTreemenuModule } from '@expriviauser/design-system';



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
    LibMultiSelectModule
  ]
})
export class About2Module { }
