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
  LibTextareaModule
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
