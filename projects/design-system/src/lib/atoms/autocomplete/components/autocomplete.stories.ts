
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';
import { LibAutocompleteModule } from '../lib-autocomplete.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const meta: Meta<AutocompleteComponent> = {
  title: 'Components/Atomi/Autocomplete',
  // The component related to the Stories
  component: AutocompleteComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, LibAutocompleteModule, BrowserAnimationsModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<AutocompleteComponent>;

export const Base: Story = {
  args: {
    valueAutocomplete: [''],
    placeholder: '',
    value: '',
    label: 'cc',
    icon: '',
    disabled: false,
    showClear: false,
    field: '',
    minLength: 3,
    //@ts-ignore
    onChange: (event: any) => { console.log(event) }
  }
}
