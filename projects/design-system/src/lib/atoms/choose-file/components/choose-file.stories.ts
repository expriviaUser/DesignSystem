
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ChooseFileComponent } from './choose-file.component';
import { LibChooseFileModule } from '../choose-file.module';
import { HttpClientModule } from '@angular/common/http';

const meta: Meta<ChooseFileComponent> = {
  title: 'Components/Atomi/Choose file',
    // The component related to the Stories
    component: ChooseFileComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
             imports: [ CommonModule, LibChooseFileModule, HttpClientModule],
        }),
    ]
};
export default meta;

type Story = StoryObj<ChooseFileComponent>;

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