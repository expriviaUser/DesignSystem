import { TagModule } from 'primeng/tag';
import { TagComponent } from './tag.component';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';

// This exports the Stories group for this component
export default {
  title: 'Components/Atomi/Tag',
  // The component related to the Stories
  component: TagComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [TagComponent],
       imports: [ ...primeComponentsCommonModule, TagModule],
    }),
  ],
  argTypes: {
    tagSeverity: {
      control: {
        type: 'select',
      },
      options: ['info', 'disable', 'success', 'lightInformation', 'warning', 'danger', 'lightAlert', 'informationReverse', 'successReverse'],
    },
  },
};

// This creates a Story for the component
const Template: Story<TagComponent> = (args) => ({
  component: TagComponent,
  props: {
    value: args.tagLabel,
    severity: args.tagSeverity,
    rounded: args.tagRounded,
    icon: args.tagIcon
  },
  template: `
<lib-tag [tagLabel]="value" [tagSeverity]="severity" [tagRounded]="rounded" [tagIcon]="icon">
</lib-tag>`,
});


export const Base = Template.bind({});
Base.args = {
  tagLabel: "Primary",
  tagSeverity: "",
  tagRounded: false,
  tagIcon: ""
};


export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi pi-user"
};