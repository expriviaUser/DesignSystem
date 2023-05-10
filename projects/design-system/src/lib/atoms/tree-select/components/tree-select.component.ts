import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { TreeSelectModel } from "../models/tree-select.model";

@Component({
    selector: 'lib-tree-select',
    templateUrl: './tree-select.component.html',
    styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent {

    @Input() nodes: TreeSelectModel[] = [];

    @Input() valueTemplate!: TemplateRef<any>;

    @Input() selectedNodes: TreeSelectModel[] = [];
    @Output() selectedNodesChange: EventEmitter<TreeSelectModel[]> = new EventEmitter<TreeSelectModel[]>();

    @Input() placeholder = "Select Item";
    @Input() selectionType = "multiple";
    @Output() emitSelectedOption: EventEmitter<{ originalEvent: PointerEvent, node: TreeSelectModel }> = new EventEmitter<{ originalEvent: PointerEvent, node: TreeSelectModel }>();
    @Output() emitUnselect: EventEmitter<{ originalEvent: PointerEvent, node: TreeSelectModel }> = new EventEmitter<{ originalEvent: PointerEvent, node: TreeSelectModel }>();
    @Output() emitSelectedValues: EventEmitter<Array<TreeSelectModel>> = new EventEmitter<Array<TreeSelectModel>>();

    constructor() {
    }

    optionEmit(event: { originalEvent: PointerEvent, node: TreeSelectModel }): void {
        this.emitSelectedOption.emit(event);
    }

    unselectEmit(event: { originalEvent: PointerEvent, node: TreeSelectModel }): void {

        this.emitUnselect.emit(event);
    }

    selectedValuesEmit(event: Array<TreeSelectModel>): void {
        this.emitSelectedValues.emit(event);
    }


}
