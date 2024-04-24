
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonComponent } from './radio-button.component';
import { LibRadioButtonModule } from '../lib-radio-button.module';


const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Atomi/RadioButton',
  // The component related to the Stories
  component: RadioButtonComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibRadioButtonModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    colSize: {description: "Only for bootstrap"}
  },
};
export default meta;

type Story = StoryObj<RadioButtonComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    colSize: "3",
    items: [{data: 0, label: 'Prova'}, {data: 1, label: 'Prova2'}],
    label: "Radio button",
    name: "prova-radio"
  }
}