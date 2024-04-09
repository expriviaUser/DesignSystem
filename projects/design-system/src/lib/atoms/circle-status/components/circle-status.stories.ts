
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CircleStatusComponent } from './circle-status.component';
import { LibCircleStatusModule } from '../lib-circle-status.module';

const meta: Meta<CircleStatusComponent> = {
  title: 'Components/Atomi/Circle status',
    // The component related to the Stories
    component: CircleStatusComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
             imports: [ CommonModule, LibCircleStatusModule],
        }),
    ]
};
export default meta;

type Story = StoryObj<CircleStatusComponent>;

export const Base: Story = {
  args: {
  },
};

/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */