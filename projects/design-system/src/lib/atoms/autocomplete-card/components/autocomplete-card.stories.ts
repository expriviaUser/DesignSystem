
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteCardComponent } from './autocomplete-card.component';
import { LibAutocompleteCardModule } from '../lib-autocomplete-card.module';


const meta: Meta<AutocompleteCardComponent> = {
  title: 'Components/Atomi/AutocompleteCard',
  // The component related to the Stories
  component: AutocompleteCardComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, LibAutocompleteCardModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    valueAutocomplete: {
    }
  }
};
export default meta;

type Story = StoryObj<AutocompleteCardComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    valueAutocomplete: [{
      code: 1,
      name: 'Prova1',
      content: 'Via Napoli'
  }],
    placeholder: '',
    value: '',
    label: 'cc',
    icon: '',
    disabled: false,
    showClear: false,
    minLength: 3,
    //@ts-ignore
    onChange: (event: any) => { console.log(event) }
  }
}
