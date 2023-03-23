import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTagModule } from './atoms/tag/lib-tag.module';
import { LibCardModule } from './atoms/card/lib-card.module';

const sharedModules = [
  LibTagModule,
  LibCardModule
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
