import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTagModule } from './atoms/tag/lib-tag.module';
import { LibCardModule } from './atoms/card/lib-card.module';
import { LibBreadcrumbModule } from './atoms/breadcrumb/lib-breadcrumb.module';
import { LibButtonModule } from './atoms/button/lib-button.module';
import { LibDropdownModule } from './atoms/dropdown/lib-dropdown.module';
import { LibCalendarModule } from './atoms/calendar/lib-calendar.module';
import { LibAutocompleteModule } from './atoms/autocomplete/lib-autocomplete.module';
import { LibCheckboxModule } from './atoms/checkbox/lib-checkbox.module';
import { LibRadioButtonModule } from './atoms/radio-button/lib-radio-button.module';
import { LibTextareaModule } from './atoms/textarea/lib-textarea.module';
import { LibInputModule } from './atoms/input/lib-input.module';
import { InputFormModule } from './atoms/input-form/input-form.module';
import { LibBadgeModule } from './atoms/badge/lib-badge.module';
import { LibDialogModule } from './atoms/dialog/lib-dialog.module';
import { LibIconCircleModule } from './atoms/icon-circle/lib-icon-circle.module';
import { LibTabsModule } from './atoms/tabs/lib-tabs.module';
import { LibTableModule } from './molecole/table/lib-table.module';
import { CtaBarModule } from './molecole/cta-bar/cta-bar.module';
import { HeaderItemsModule } from './molecole/header-items/header-items.module';
import { LibMessagesModule } from './molecole/messages/lib-messages.module';
import { LibRadioTileModule } from './molecole/radio-tile/lib-radio-tile.module';
import { LibChipModule } from './atoms/chip/lib-chip.module';
import { LibFiltriModule } from './micro-organismi/filtri/lib-filtri.module';

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
  LibFiltriModule
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class DesignSystemModule { }
