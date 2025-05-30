import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibAddress } from '../models/address.model';

@Component({
  selector: 'lib-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() address!: LibAddress;
  @Input() modify: boolean = false;
  @Input() buttonLabel: string = 'Modifica';

  @Output() modifyClicked = new EventEmitter<boolean>();

}
