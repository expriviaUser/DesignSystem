
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';
import { LibDropdownModule } from '../lib-dropdown.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const meta: Meta<DropdownComponent> = {
  title: 'Components/Atomi/Dropdown',
  // The component related to the Stories
  component: DropdownComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibDropdownModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<DropdownComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    valueDropdown: [{code: 1, name: 'prova'}, {code: 2, name: 'prova1'}, {code: 3, name: 'prova2'}, {code: 4, name:'prova3'}],
    codeString: 'code',
    clear: true, 
    disabled: false,
    filter: true, 
    filterPlaceholder: 'Cerca',
    label: 'Dropdown',
    nameString: 'name',
    placeholder: 'Seleziona valore',

  }
}