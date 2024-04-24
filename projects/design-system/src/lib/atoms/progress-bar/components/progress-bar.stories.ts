
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './progress-bar.component';
import { LibProgressBarModule } from '../lib-progress-bar.module';


const meta: Meta<ProgressBarComponent> = {
  title: 'Components/Atomi/ProgressBar',
  // The component related to the Stories
  component: ProgressBarComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibProgressBarModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<ProgressBarComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    progress: 25,
    showValue: true
  }
}