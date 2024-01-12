
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LibBadgeModule } from '../lib-badge.module';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Atomi/Badge',
    // The component related to the Stories
    component: BadgeComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
             imports: [ CommonModule, LibBadgeModule],
        }),
    ]
};
export default meta;

type Story = StoryObj<BadgeComponent>;

export const Base: Story = {
  args: {
    menuBadge: '0'
  },
};

/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */