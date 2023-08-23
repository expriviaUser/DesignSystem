import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';

const primeComponents = [
    PanelMenuModule,

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
