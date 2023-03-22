import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibTagModule } from './atoms/tag/lib-tag.module';

const sharedModules = [
  LibTagModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class DesignSystemModule { }
