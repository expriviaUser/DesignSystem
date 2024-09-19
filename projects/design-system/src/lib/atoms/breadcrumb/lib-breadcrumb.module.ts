import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { BreadcrumbItemDirective } from './directives/breadcrumb.directive';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/* const primeComponents = [
    BreadcrumbModule
]; */

const exportComponent = [
    BreadcrumbComponent,
    BreadcrumbItemDirective
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        // ...primeComponents,
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibBreadcrumbModule { }
