
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ChipComponent } from './chip.component';
import { LibChipModule } from '../lib-chip.module';

const meta: Meta<ChipComponent> = {
  title: 'Components/Atomi/Chip',
    // The component related to the Stories
    component: ChipComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
             imports: [ CommonModule, LibChipModule],
        }),
    ]
};
export default meta;

type Story = StoryObj<ChipComponent>;

export const Base: Story = {
  name: 'Default',
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