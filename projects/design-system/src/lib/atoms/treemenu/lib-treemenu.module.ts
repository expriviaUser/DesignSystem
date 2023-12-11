import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreemenuComponent } from './components/treemenu.component';
import { TreeModule } from 'primeng/tree';


const primeComponents = [
    TreeModule,

];

const exportComponent = [
    TreemenuComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        CommonModule,
        ...primeComponents,
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibTreemenuModule { }
