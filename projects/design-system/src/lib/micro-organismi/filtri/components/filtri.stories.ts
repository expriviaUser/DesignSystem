import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ChipModule } from "primeng/chip";
import { FiltriComponent } from "./filtri.component";
import { DropdownModule } from "primeng/dropdown";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownAltComponent } from "../../atoms/form-items/dropdown-alt/dropdown-alt.component";
import { ChipComponent } from "../../atoms/chip/chip.component";

// This exports the Stories group for this component
export default {
    title: 'Components/Micro Organismi/Filtri',
    // The component related to the Stories
    component: FiltriComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [FiltriComponent, DropdownAltComponent, ChipComponent],
            imports: [CommonModule, DropdownModule, ChipModule, FormsModule, BrowserAnimationsModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<FiltriComponent> = (args) => ({
    component: FiltriComponent,
    props: {
        dropdownValues: args.dropdownValues,
        filterValues: args.filterValues
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
        ['string 1',
            'string 2',
            'string 3'],
        [
            { name: 'Tipologia richiesta1', code: 'Tipologia richiesta1' },
            { name: 'Tipologia richiesta2', code: 'Tipologia richiesta2' },
            { name: 'Tipologia richiesta3', code: 'Tipologia richiesta3' },
            { name: 'Tipologia richiesta4', code: 'Tipologia richiesta4' },
        ],
        [
            { name: 'Tipologia richiesta5', code: 'Tipologia richiesta5' },
            { name: 'Tipologia richiesta6', code: 'Tipologia richiesta6' },
            { name: 'Tipologia richiesta7', code: 'Tipologia richiesta7' },
            { name: 'Tipologia richiesta8', code: 'Tipologia richiesta8' },
        ]
    ],
    // @ts-ignore
    filterValues: (data: string[]) => console.log(data)
};

