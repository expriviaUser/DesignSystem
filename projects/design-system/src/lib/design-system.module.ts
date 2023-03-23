import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTagModule } from './atoms/tag/lib-tag.module';
import { LibCardModule } from './atoms/card/lib-card.module';
import { LibBreadcrumbModule } from './atoms/breadcrumb/lib-breadcrumb.module';
import { LibButtonModule } from './atoms/button/lib-button.module';

const sharedModules = [
  LibTagModule,
  LibCardModule,
  LibBreadcrumbModule,
  LibButtonModule
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
