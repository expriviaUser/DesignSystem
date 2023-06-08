import { NgModule } from '@angular/core';
import { LibAutocompleteModule } from './atoms/autocomplete/lib-autocomplete.module';
import { LibBadgeModule } from './atoms/badge/lib-badge.module';
import { LibBreadcrumbModule } from './atoms/breadcrumb/lib-breadcrumb.module';
import { LibButtonModule } from './atoms/button/lib-button.module';
import { LibCalendarModule } from './atoms/calendar/lib-calendar.module';
import { LibCardModule } from './atoms/card/lib-card.module';
import { LibCheckboxModule } from './atoms/checkbox/lib-checkbox.module';
import { LibChipModule } from './atoms/chip/lib-chip.module';
import { LibDialogModule } from './atoms/dialog/lib-dialog.module';
import { LibDropdownModule } from './atoms/dropdown/lib-dropdown.module';
import { LibIconCircleModule } from './atoms/icon-circle/lib-icon-circle.module';
import { InputFormModule } from './atoms/input-form/input-form.module';
import { LibInputModule } from './atoms/input/lib-input.module';
import { LibRadioButtonModule } from './atoms/radio-button/lib-radio-button.module';
import { LibTabsModule } from './atoms/tabs/lib-tabs.module';
import { LibTagModule } from './atoms/tag/lib-tag.module';
import { LibTextareaModule } from './atoms/textarea/lib-textarea.module';
import { CtaBarModule } from './molecole/cta-bar/cta-bar.module';
import { HeaderItemsModule } from './molecole/header-items/header-items.module';
import { LibMessagesModule } from './molecole/messages/lib-messages.module';
import { LibRadioTileModule } from './molecole/radio-tile/lib-radio-tile.module';
import { LibFiltersModule } from "./micro-organismi/filters/lib-filters.module";
import { HeaderMenuModule } from './molecole/header-menu/header-menu.module';
import { SidebarModule } from './atoms/sidebar/sidebar.module';
import { CommonModule } from '@angular/common';
import { LibTableModule } from './molecole/table/lib-table.module';
import { FileModule } from './molecole/file/file.module';
import { FileStatusModule } from './molecole/file-status/file-status.module';
import { LibTreeSelectModule } from "./atoms/tree-select/lib-tree-select.module";
import { LibProgressBarModule } from './atoms/progress-bar/lib-progress-bar.module';
import { LibUploadFileModule } from './molecole/upload-file/lib-upload-file.module';
import { LibChooseFileModule } from './atoms/choose-file/choose-file.module';
import { SwitchModule } from './atoms/switch/switch.module';
import { LibTreemenuModule } from './atoms/treemenu/lib-treemenu.module';
import { HeaderItemsService, LibTableService } from '../public-api';
import { PipesModule } from './pipes/pipes.module';
import { LibLoaderModule } from './atoms/loader/lib-loader.module';

const sharedModules = [
    LibTagModule,
    LibCardModule,
    LibBreadcrumbModule,
    LibButtonModule,
    LibDropdownModule,
    LibCalendarModule,
    LibAutocompleteModule,
    LibCheckboxModule,
    LibRadioButtonModule,
    LibChipModule,
    LibTextareaModule,
    InputFormModule,
    LibInputModule,
    LibBadgeModule,
    LibDialogModule,
    LibIconCircleModule,
    LibTabsModule,
    LibTableModule,
    CtaBarModule,
    HeaderItemsModule,
    LibMessagesModule,
    LibRadioTileModule,
    LibFiltersModule,
    HeaderMenuModule,
    SidebarModule,
    FileModule,
    FileStatusModule,
    LibTreeSelectModule,
    LibProgressBarModule,
    LibUploadFileModule,
    LibChooseFileModule,
    SwitchModule,
    LibTreemenuModule,
    PipesModule,
    LibLoaderModule,
    HeaderItemsModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...sharedModules
    ],
    exports: [
        ...sharedModules
    ],
    providers: [LibTableService]
})
export class DesignSystemModule { }
