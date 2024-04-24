
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper.component';
import { LibStepperModule } from '../lib-stepper.module';


const meta: Meta<StepperComponent> = {
  title: 'Components/Atomi/Stepper',
  // The component related to the Stories
  component: StepperComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibStepperModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<StepperComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    items: [{label: 'Step1', items: []},
    {label: 'Step2', items: [], disabled: true},
    {label: 'Step3', items: []},
    {label: 'Step4', items: [], disabled: true},
    {label: 'Step5', items: []},],
    activeIndex: 0,
    showButtons: true
  }
}