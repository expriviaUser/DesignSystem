import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeMenu } from '../models/treemenu.model';
import { TreeSelectModel } from '@expriviauser/design-system';

@Component({
  selector: 'lib-treemenu',
  templateUrl: './treemenu.component.html',
  styleUrls: ['./treemenu.component.scss']
})
export class TreemenuComponent {
  @Input() items!: TreeMenu[];
  @Input() filter: boolean = false;
  @Input() scrollHeight!: string;
  @Input() checkboxOnlyLeaf: boolean = false;
  @Input() propagateSelectionUp: boolean = true;
  @Input() propagateSelectionDown: boolean = true;
  @Input() selectionMode: string = 'single';
  @Input() filterPlaceholder: string = 'Search';
  @Input() filterMode: string = 'lenient';
  @Input() selected!: any;

  @Output() selectedChange: EventEmitter<TreeMenu[]> = new EventEmitter<TreeMenu[]>();

  changedSelection(event: any) {
    this.selectedChange.emit(event);
  }

  optionEmit(event: { originalEvent: PointerEvent, node: TreeSelectModel }): void {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
    // this.emitSelectedOption.emit(event);
  }

  unselectEmit(event: { originalEvent: PointerEvent, node: TreeSelectModel }): void {
    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
    //this.emitUnselect.emit(event);
  }


}
