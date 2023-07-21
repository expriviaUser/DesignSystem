import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutDueComponent } from './about-due/about-due.component';
import { CaricamentoComponent } from './caricamento/caricamento.component';
import { About2RoutingModule } from './about-2-routing.module';
import { LibBreadcrumbModule } from '@dnlcorti/design-system';
import { DesignSystemModule } from 'design-system';
import { LibPickListModule } from 'projects/design-system/src/public-api';



@NgModule({
    declarations: [
        AboutDueComponent,
        CaricamentoComponent
    ],
    imports: [
        CommonModule,
        About2RoutingModule,
        LibBreadcrumbModule,
        LibPickListModule
    ]
})
export class About2Module { }
