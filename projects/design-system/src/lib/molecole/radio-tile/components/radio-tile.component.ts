import { Component, Input } from '@angular/core';
import { RadioTile } from 'src/app/models/radio-tile.model';

@Component({
  selector: 'lib-radio-tile',
  templateUrl: './radio-tile.component.html',
  styleUrls: ['./radio-tile.component.scss']
})
export class RadioTileComponent {
  @Input() tiles: RadioTile[] = [];

  protected valueSelected: string = '';

  isSelected(rValue: string): boolean {
    return this.valueSelected === rValue;
  }

  emitRadioValue(event: any) {
    console.log('emitRadioTileValue', event.value);
    this.valueSelected = event.value;
  }

  buttonCopyClicked(event: any) {
    console.log('emitCopyButtonClicked');
  }

  buttonUpdateClicked(event: any) {}
}
