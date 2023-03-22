import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTagModule } from './atoms/tag/lib-tag.module';

const sharedModules = [
  LibTagModule
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
