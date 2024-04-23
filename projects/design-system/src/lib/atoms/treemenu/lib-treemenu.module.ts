import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreemenuComponent } from './components/treemenu.component';
import { TreeModule } from 'primeng/tree';
import { TreeDragDropService } from 'primeng/api';


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
    ],
    providers: [TreeDragDropService]
})
export class LibTreemenuModule { }
