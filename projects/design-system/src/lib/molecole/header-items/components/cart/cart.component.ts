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

    protected show: boolean = false;


    constructor(private headerItemsService: HeaderItemsService) {

    }

    ngOnInit() {
        this.headerItemsService.cartItems$.subscribe((value: any) => {
            this.rows = [];
            this.rows = [...value];
        })
    }

    protected openOverlay(event: any) {
        event.stopPropagation();
        this.show = !this.show;
    }
}
