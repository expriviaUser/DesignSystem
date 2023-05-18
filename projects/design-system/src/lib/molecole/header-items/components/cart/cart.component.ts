import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'lib-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    @Input() items: string = '0';
    @Input() rows: any[] = [{ id: 1, description: 'ciao' }, { id: 2, description: 'ciao-2' }];
    @Input() externalBody!: TemplateRef<any>;

    protected openCart = false;
}
