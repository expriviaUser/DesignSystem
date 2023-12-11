import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {LanguageSelectorComponent} from "./language-selector.component";
import {DropdownModule} from "primeng/dropdown";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// This exports the Stories group for this component
export default {
  title: 'Components/Molecole/Language selector',
  // The component related to the Stories
  component: LanguageSelectorComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [LanguageSelectorComponent],
       imports: [ ...primeComponentsCommonModule, DropdownModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule],
    }),
  ],

  argTypes: {
    options: {
      name: 'options',
      description: 'Dropdown options',
      table: {
        type: {summary: 'Object array'},
        defaultValue: {summary: 'Empty object'},
      }
    },
    selectedOption: {
      name: 'selectedOption',
      description: 'selectedOption Ng Model',
      table: {
        type: {summary: 'object'},
        defaultValue: {summary: 'Empty object'},
      }
    },
    control: {
      name: 'control',
      description: 'formControl',
      table: {
        type: {summary: 'formControl object'},
        defaultValue: {summary: 'Empty object'},
      }
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '\'Label\''},
      },
      control: {type: 'text'}
    },
    optionLabel: {
      name: 'optionLabel',
      description: 'option label',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '\'name\''},
      },
      control: {type: 'text'}
    }
  }

};

// This creates a Story for the component
const Template: Story<LanguageSelectorComponent & { click: () => void }> = (args) => ({
  component: LanguageSelectorComponent,
  props: {
    options: args.options,
    selectedOption: args.selectedOption,
    control: args.control,
    placeholder: args.placeholder,
    optionLabel: args.optionLabel
  },
  template: `
<lib-language-selector
[options]="options"
[(selectedOption)]="selectedOption"
[control]="control"
[placeholder]="placeholder"
[optionLabel]="optionLabel"
>
</lib-language-selector>`,
});

// PRIMARY GPG
export const Base = Template.bind({});
Base.args = {
  options: [
    {name: '1st menu item', code: '1'},
    {name: '2nd menu item', code: '2'},
    {name: '3rd menu item', code: '3'}
  ],
  control: new FormControl(),
  placeholder: "IT",
  optionLabel: "name"
};
