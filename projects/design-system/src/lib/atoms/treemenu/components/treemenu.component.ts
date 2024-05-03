import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeMenu } from '../models/treemenu.model';
import { TreeSelectModel } from '../../tree-select/models/tree-select.model';
import { TreeDragDropService } from 'primeng/api';

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
  @Input() lazy: boolean = false;
  @Input() draggableNodes: boolean = false;
  @Input() droppableNodes: boolean = false;
  @Input() disabled: boolean = false;
  @Input() propagateSelectionDown: boolean = true;
  @Input() selectionMode: string = 'single';
  @Input() filterPlaceholder: string = 'Search';
  @Input() filterMode: string = 'lenient';
  @Input() selected!: any;
  @Input() lazyFn: Function;

  @Output() selectedChange: EventEmitter<TreeMenu[]> = new EventEmitter<TreeMenu[]>();
  @Output() emitUnselect = new EventEmitter<TreeSelectModel>();
  @Output() emitSelect = new EventEmitter<TreeSelectModel>();

  constructor(protected dragservice: TreeDragDropService) {}

  changedSelection(event: any) {
    this.selectedChange.emit(event);
  }

  unselectEmit(event: { originalEvent: PointerEvent, node: TreeSelectModel }): void {
    console.log(event);
    this.emitUnselect.emit(event.node);
  }
 
  selectEmit(event: { originalEvent: PointerEvent, node: TreeSelectModel }): void {
    console.log(event);
    this.emitSelect.emit(event.node);
  }

  lazyLoad(event: any) {
    console.log(event);
  }

  expandNode(event: any) {
    this.lazyFn(event.node);
  }

  nodeCollapse(event: any) {
    event.node.children = [{label: '', code: null}];
  }
}
