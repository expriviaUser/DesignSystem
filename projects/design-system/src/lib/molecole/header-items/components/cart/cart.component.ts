import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { HeaderItemsService } from '../../services/header-items.service';

@Component({
    selector: 'lib-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    @Input() rows: any[] = [];
    @Input() externalBody!: TemplateRef<any>;
    @Input() externalHeader!: TemplateRef<any>;


    constructor(private headerItemsService: HeaderItemsService) {

    }

    ngOnInit() {
        this.headerItemsService.cartItems$.subscribe((value: any) => {
            this.rows = [...value];
        })
    }

    protected openOverlay(op: any, event: any) {
        if (this.rows.length > 0)
            op.toggle(event);
    }
}
