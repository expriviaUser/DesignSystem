
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LibIconCircleModule } from '../lib-icon-circle.module';
import { IconCircleComponent } from './icon-circle.component';


const meta: Meta<IconCircleComponent> = {
  title: 'Components/Atomi/IconCircle',
  // The component related to the Stories
  component: IconCircleComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibIconCircleModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<IconCircleComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    icon: "pi pi-search",
    size: "small",
    type: "info"
  }
}