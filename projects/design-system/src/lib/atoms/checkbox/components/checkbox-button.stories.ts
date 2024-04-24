
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CheckboxButtonComponent } from './checkbox-button.component';
import { LibCheckboxModule } from '../lib-checkbox.module';

const meta: Meta<CheckboxButtonComponent> = {
  title: 'Components/Atomi/Checkbox',
    // The component related to the Stories
    component: CheckboxButtonComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
             imports: [ CommonModule, LibCheckboxModule],
        }),
    ]
};
export default meta;

type Story = StoryObj<CheckboxButtonComponent>;

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