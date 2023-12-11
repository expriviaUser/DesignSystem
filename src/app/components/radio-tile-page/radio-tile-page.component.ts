import { Component } from '@angular/core';
import { RadioTile } from 'projects/design-system/src/lib/molecole/radio-tile/models/radio-tile.model';

@Component({
    selector: 'app-radio-tile-page',
    templateUrl: './radio-tile-page.component.html',
    styleUrls: ['./radio-tile-page.component.scss']
})
export class RadioTilePageComponent {
    tiles: RadioTile[] = [{
        id: 0,
        content: 'Ciao',
        radio: {
            radioDisabled: false,
            radioName: 'Nome sede',
            radioValue: '1',
        },
        showHeaderAction: false,
        floor: 1,
        room: 5,
        building: 145,
        title: 'Prova',
    },
    {
        id: 1,
        content: 'Ciao',
        radio: {
            radioDisabled: false,
            radioName: 'Nome sede',
            radioValue: '2',
        },
        showHeaderAction: false,
        title: 'Prova',
    }]
}
