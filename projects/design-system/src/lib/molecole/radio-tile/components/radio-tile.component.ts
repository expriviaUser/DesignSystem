import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { RadioTile } from '../models/radio-tile.model';

@Component({
  selector: 'lib-radio-tile',
  templateUrl: './radio-tile.component.html',
  styleUrls: ['./radio-tile.component.scss']
})
export class RadioTileComponent {
  @Input() tiles: RadioTile[] = [];
  @Input() showRadio: boolean = true;
  @Input() externalInfo!: TemplateRef<any>;

  protected valueSelected: string = '';

  @Output() emitToModify = new EventEmitter<number>();
  @Output() emitSelected = new EventEmitter<string>();

  isSelected(rValue: string): boolean {
    return this.valueSelected === rValue;
  }

  emitRadioValue(event: any) {
    this.valueSelected = event.value;
    this.emitSelected.emit(this.valueSelected);
  }
  buttonUpdateClicked(event: number) {
    this.emitToModify.emit(event);
  }
  selectObj(tile: RadioTile) {
    this.valueSelected = tile.id.toString();
    this.emitSelected.emit(this.valueSelected);
  }
}
