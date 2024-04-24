
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInlineComponent } from './error-inline.component';
import { LibErrorInlineModule } from '../lib-error-inline.module';
import { FormControl, MaxLengthValidator } from '@angular/forms';


const meta: Meta<ErrorInlineComponent> = {
  title: 'Components/Atomi/Error - Form',
  // The component related to the Stories
  component: ErrorInlineComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibErrorInlineModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<ErrorInlineComponent>;

export const Base: Story = {
  name: 'Default',
  /* args: {
    control: new FormControl(['', Error]).setErrors(MaxLengthValidator).

  } */
}