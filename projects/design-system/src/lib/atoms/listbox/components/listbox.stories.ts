
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListboxComponent } from './listbox.component';
import { LibListboxModule } from '../lib-listbox.module';


const meta: Meta<ListboxComponent> = {
  title: 'Components/Atomi/ListBox',
  // The component related to the Stories
  component: ListboxComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibListboxModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<ListboxComponent>;

export const Text: Story = {
  name: 'Default',
  args: {
    label: 'Listbox',
    nameString: 'description',
    items: [{code: 1, description: 'prova'}, {code: 2, description: 'prova1'}, {code: 3, description: 'prova2'}, ]
  }
}