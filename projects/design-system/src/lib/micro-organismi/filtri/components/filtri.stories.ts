import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {ChipModule} from "primeng/chip";
import {FiltriComponent} from "./filtri.component";
import {DropdownModule} from "primeng/dropdown";
import { FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownAltComponent} from "../../atoms/form-items/dropdown-alt/dropdown-alt.component";
import {ChipComponent} from "../../atoms/chip/chip.component";
import {TreeSelectComponent} from "../../atoms/form-items/tree-select/tree-select.component";
import {TreeSelectModule} from "primeng/treeselect";

// This exports the Stories group for this component
export default {
    title: 'Components/Micro Organismi/Filtri',
    // The component related to the Stories
    component: FiltriComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [FiltriComponent, TreeSelectComponent, ChipComponent],
            imports: [CommonModule, TreeSelectModule, ChipModule, FormsModule, BrowserAnimationsModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<FiltriComponent> = (args) => ({
    component: FiltriComponent,
    props: {
dropdownValues: args.dropdownValues,
        filterValues:args.filterValues
    },
    template: `
<lib-filtri
[dropdownValues]="dropdownValues"
(filterValues)="filterValues($event)"
>
</lib-filtri>`,
});

export const Filtri = Template.bind({});

Filtri.args = {
dropdownValues: [
    [
        {label: 'Tipologia richiesta1', data: 'Tipologia richiesta1', key: '0'},
        {label: 'Tipologia richiesta2', data: 'Tipologia richiesta2', key: '1'},
        {label: 'Tipologia richiesta3', data: 'Tipologia richiesta3', key: '2'},
        {label: 'Tipologia richiesta4', data: 'Tipologia richiesta4', key: '3'},

    ],
    [
        {label: 'Tipologia richiesta5', data: 'Tipologia richiesta5', key: '4'},
        {label: 'Tipologia richiesta6', data: 'Tipologia richiesta6', key: '5'},
        {label: 'Tipologia richiesta7', data: 'Tipologia richiesta7', key: '6'},
        {label: 'Tipologia richiesta8', data: 'Tipologia richiesta8', key: '7'}
    ]
],
    // @ts-ignore
    filterValues: (data: string[]) => console.log(data)
};

