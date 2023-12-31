import { Directive } from '@angular/core';

/**
 * This directive is used to customize the breadcrumb label behavior
 * *BreadcrumbItem directive can be used in the child element of breadcrumb
 * Usage: refer to the demo - app.component.html
 */
@Directive({
    selector: '[breadcrumbItem]',
})
export class BreadcrumbItemDirective { }