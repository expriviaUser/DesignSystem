import { Component } from '@angular/core';

@Component({
    selector: 'app-listbox-page',
    templateUrl: './listbox-page.component.html',
    styleUrls: ['./listbox-page.component.scss']
})
export class ListboxPageComponent {
    items: any[] = [
        { code: 1, name: 'item 1' },
        { code: 2, name: 'item 2' },
        { code: 3, name: 'item 3' },
        { code: 4, name: 'item 4' },
        { code: 5, name: 'item 5' },
        { code: 6, name: 'item 6' },
        { code: 7, name: 'item 7' }
    ];
    selectedItem: any;
    selectedItem2: any;

    constructor() {
        this.selectedItem2 = this.items[2];
    }

    changeValueHandler(event: any) {
        console.log('listBox PAGE changeValueHandler: ', event);
    }
}
