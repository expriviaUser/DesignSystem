import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { HeaderMenuComponent } from './components/header-menu.component';
import { LibProgressBarModule } from '../../atoms/progress-bar/lib-progress-bar.module';


const primeComponents = [
    MenubarModule
];

const exportComponent = [
    HeaderMenuComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        LibProgressBarModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class HeaderMenuModule { }
