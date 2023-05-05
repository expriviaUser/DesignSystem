import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibBreadcrumbModule } from 'design-system';
import { AboutDueComponent } from './about-due/about-due.component';
import { CaricamentoComponent } from './caricamento/caricamento.component';
import { About2RoutingModule } from './about-2-routing.module';



@NgModule({
    declarations: [
        AboutDueComponent,
        CaricamentoComponent
    ],
    imports: [
        CommonModule,
        About2RoutingModule,
        LibBreadcrumbModule
    ]
})
export class About2Module { }
