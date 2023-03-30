import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SidebarComponent } from './components/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const primeComponents = [
  TieredMenuModule,

];

const exportComponent = [
  SidebarComponent
];

@NgModule({
  declarations: [
    ...exportComponent
  ],
  imports: [
    ...primeComponents,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ...exportComponent,

  ],
  entryComponents: [
    ...exportComponent
  ]
})


export class SidebarModule { }
