import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../models/address.model';

@Component({
    selector: 'lib-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    @Input() address!: Address;
    @Input() modify: boolean = false;

    @Output() modifyClicked = new EventEmitter<boolean>();

    ngOnInit() {
        console.log(this.address);
    }
}
