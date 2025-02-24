import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {TreeSelectModel} from "../models/tree-select.model";

@Component({
    selector: 'lib-tree-select',
    templateUrl: './tree-select.component.html',
    styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {

    @Input() nodes: TreeSelectModel[] = [];
    @Input() label: string = '';
    @Input() enableFilter = false;
    @Input() propagateDown = false;
    @Input() lazy = false;
    @Input() appendTo = 'body';
    @Input() lazyFn: Function;
    @Input() propagateUp = false;
    @Input() disabled = false;
    @Input() filterPlaceholder!: string;
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

    expandNode(event: any) {
        this.lazyFn(event.node);
    }

    nodeCollapse(event: any) {
        event.node.children = [{label: '', code: null}];
    }

    ngOnInit(): void {
        this.nodes = this.addKeyOnEveryNode(this.nodes);
    }

    private addKeyOnEveryNode(nodes: TreeSelectModel[]) {
        for (const node of nodes) {
            node.key = node.data.toString();
            if (node.children) {
                this.addKeyOnEveryNode(node.children);
            }

        }
        return nodes;
    }

}
