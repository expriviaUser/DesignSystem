import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/table/table.component';
import { ActionsTableComponent } from './components/actions-table/actions-table.component';
import { PaginatorModule } from 'primeng/paginator';
import { LibButtonModule } from '../../atoms/button/lib-button.module';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { LibTableService } from './services/lib-table.service';
import { LibCheckboxModule } from '../../atoms/checkbox/lib-checkbox.module';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);

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
    LibCheckboxModule,
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
