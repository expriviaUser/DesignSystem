import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {ChipModule} from "primeng/chip";
import {FiltersComponent} from "./filters.component";
import { FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChipComponent} from "../../../atoms/chip/components/chip.component";
import {TreeSelectComponent} from "../../../atoms/tree-select/components/tree-select.component";
import {TreeSelectModule} from "primeng/treeselect";

// This exports the Stories group for this component
export default {
    title: 'Components/Micro Organismi/Filters',
    // The component related to the Stories
    component: FiltersComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [FiltersComponent, TreeSelectComponent, ChipComponent],
            imports: [CommonModule, TreeSelectModule, ChipModule, FormsModule, BrowserAnimationsModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<FiltersComponent> = (args) => ({
    component: FiltersComponent,
    props: {
dropdownValues: args.dropdownValues,
        filterValues:args.filterValues
    },
    template: `
<lib-filters
[dropdownValues]="dropdownValues"
(filterValues)="filterValues($event)"
>
</lib-filters>`,
});

export const Filters = Template.bind({});

Filters.args = {
dropdownValues: [
  {
    data: [
      { label: 'Tipologia richiesta1', data: 'Data richiesta1'},
      { label: 'Tipologia richiesta2', data: 'Data richiesta2'},
      { label: 'Tipologia richiesta3', data: 'Data richiesta3'},
      { label: 'Tipologia richiesta4', data: 'Data richiesta4'}

    ], placeholder: "Placeholder1", field: "filter1"
  },
  {
    data: [
      { label: 'Tipologia richiesta5', data: 'Data richiesta5'},
      { label: 'Tipologia richiesta6', data: 'Data richiesta6'},
      { label: 'Tipologia richiesta7', data: 'Data richiesta7'},
      { label: 'Tipologia richiesta8', data: 'Data richiesta8'}
    ], placeholder: "Placeholder2", field: "filter2"
  }],
    // @ts-ignore
    filterValues: (data: string[]) => console.log(data)
};

