
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
      options: ['primary', 'secondary', 'secondary-rounded', 'rounded', 'link', 'link-icon'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'big'],
    },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['','left', 'right'],
    },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  name: 'Primary',
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
  name: 'Secondary',
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
  name: 'Link',
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
export const IconButton: Story = {
  name: 'Icon',
  args: {
    type: 'link',
    size: '',
    label: 'Prova',
    icon: 'pi pi-search',
    iconPosition: 'right',
    disabled: false,
    //@ts-ignore
    onClick: (event: boolean) => { console.log(event) }
  }
}
