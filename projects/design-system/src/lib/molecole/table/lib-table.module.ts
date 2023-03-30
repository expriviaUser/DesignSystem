import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { TableDesktopComponent } from './components/table-desktop/table-desktop.component';
import { TableResponsiveComponent } from './components/table-responsive/table-responsive.component';
import { ActionsTableComponent } from './components/actions-table/actions-table.component';
import { PaginatorModule } from 'primeng/paginator';
import { LibButtonModule } from '../../atoms/button/lib-button.module';
import { TieredMenuModule } from 'primeng/tieredmenu';

const primeComponents = [
    TableModule,
    PaginatorModule
];

const exportComponent = [
    ActionsTableComponent,
    TableComponent,
];

@NgModule({
    declarations: [
        ...exportComponent,
        TableDesktopComponent,
        TableResponsiveComponent,
    ],
     imports: [ ...primeComponents
         ,
        CommonModule,
        LibButtonModule,
        TieredMenuModule
    ],
    exports: [
        ...exportComponent,
         
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class LibTableModule { }
