import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SidebarComponent } from './components/sidebar.component';


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
    CommonModule
  ],
  exports: [
    ...exportComponent,

  ],
  entryComponents: [
    ...exportComponent
  ]
})


export class SidebarModule { }
