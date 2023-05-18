import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { ActionsTableComponent } from './components/actions-table/actions-table.component';
import { PaginatorModule } from 'primeng/paginator';
import { LibButtonModule } from '../../atoms/button/lib-button.module';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { LibTableService } from './services/lib-table.service';

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
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        LibButtonModule,
        TieredMenuModule
    ],
    exports: [
        ...exportComponent,
        TableModule
    ],
    entryComponents: [
        ...exportComponent
    ],
    providers: [LibTableService]
})

export class LibTableModule { }
