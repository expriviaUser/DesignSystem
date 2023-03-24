import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    @Input() items: string = '0';
}
