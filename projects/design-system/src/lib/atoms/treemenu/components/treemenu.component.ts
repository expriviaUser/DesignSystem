import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeMenu } from '../models/treemenu.model';

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
    @Input() selected!: TreeMenu[];

    @Output() selectedChange: EventEmitter<TreeMenu[]> = new EventEmitter<TreeMenu[]>();

    changedSelection() {
        this.selectedChange.emit(this.selected);
    }


}
