
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';


const meta: Meta<ButtonComponent> = {
  title: 'Components/Atomi/Button',
  // The component related to the Stories
  component: ButtonComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ButtonModule],
    }),
  ],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['', 'secondary', 'secondary-rounded', 'rounded', 'link', 'link-icon'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['', 'small', 'big'],
    },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    type: 'primary',
    size: '',
    label: 'Prova',
    icon: '',
    disabled: false,
    //@ts-ignore
    onClick: (event: boolean) => { console.log(event) }
  }
}
export const SecondaryButton: Story = {
  args: {
    type: 'secondary',
    size: '',
    label: 'Prova',
    icon: '',
    disabled: false,
    //@ts-ignore
    onClick: (event: boolean) => { console.log(event) }
  }
}
export const LinkButton: Story = {
  args: {
    type: 'link',
    size: '',
    label: 'Prova',
    icon: '',
    disabled: false,
    //@ts-ignore
    onClick: (event: boolean) => { console.log(event) }
  }
}
