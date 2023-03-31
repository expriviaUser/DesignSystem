import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import {DropdownModule} from "primeng/dropdown";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TreeSelectComponent} from "./tree-select.component";
import {TreeSelectModule} from "primeng/treeselect";

// This exports the Stories group for this component
export default {
  title: 'Components/Molecole/TreeSelect',
  // The component related to the Stories
  component: TreeSelectComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [TreeSelectComponent],
      imports: [CommonModule, TreeSelectModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule],
    }),
  ]
};

// This creates a Story for the component
const Template: Story<TreeSelectComponent & { click: () => void }> = (args) => ({
  component: TreeSelectComponent,
  props: {
nodes: args.nodes
  },
  template: `
<lib-tree-select
[nodes]="nodes">
</lib-tree-select>`,
});


export const Base = Template.bind({});
Base.args = {
    nodes: [
        {label: 'Tipologia richiesta1', data: 'Tipologia richiesta1', key: '0'},
        {label: 'Tipologia richiesta2', data: 'Tipologia richiesta2', key: '1'},
        {label: 'Tipologia richiesta3', data: 'Tipologia richiesta3', key: '2'},
        {label: 'Tipologia richiesta4', data: 'Tipologia richiesta4', key: '3'},
    ]

};

