import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../models/address.model';

@Component({
    selector: 'lib-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    @Input() address!: Address;

    ngOnInit() {
        console.log(this.address);
    }
}
