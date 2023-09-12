import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibAddress } from '../models/address.model';

@Component({
    selector: 'lib-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    @Input() address!: LibAddress;
    @Input() modify: boolean = false;

    @Output() modifyClicked = new EventEmitter<boolean>();

    ngOnInit() {
        console.log(this.address);
    }
}
