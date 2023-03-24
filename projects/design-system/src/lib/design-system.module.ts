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
  LibTextareaModule,
  InputFormModule,
  LibInputModule,
  LibBadgeModule,
  LibDialogModule,
  LibIconCircleModule,
  LibTabsModule
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
