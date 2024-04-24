
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input.component';
import { LibInputModule } from '../lib-input.module';


const meta: Meta<InputComponent> = {
  title: 'Components/Atomi/Input',
  // The component related to the Stories
  component: InputComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibInputModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<InputComponent>;

export const Text: Story = {
  name: 'Text',
  args: {
    label: 'Text',
    placeholder: 'Inserisci testo',
    type: 'text',
  }
}
export const Number: Story = {
  name: 'Number',
  args: {
    label: 'Number',
    placeholder: 'Inserisci numero',
    type: 'number',
  }
}