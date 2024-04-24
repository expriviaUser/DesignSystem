
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchComponent } from './switch.component';
import { SwitchModule } from '../switch.module';


const meta: Meta<SwitchComponent> = {
  title: 'Components/Atomi/Switch',
  // The component related to the Stories
  component: SwitchComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SwitchModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<SwitchComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    checked: false,
    disabled: false,
    label: "Vuoi attivare?",
  }
}