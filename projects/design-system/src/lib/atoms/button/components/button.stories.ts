
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Button',
    // The component related to the Stories
    component: ButtonComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [ButtonComponent],
             imports: [ ...primeComponentsCommonModule, ButtonModule],
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

// This creates a Story for the component
const Template: Story<ButtonComponent> = (args) => ({
    component: ButtonComponent,
    props: {
        type: args.type,
        size: args.size,
        label: args.label,
        icon: args.icon,
        disabled: args.disabled,
        onClick: args.onClick
    },
    template: `
    <lib-button [label]="label" [size]="size" [type]="type" [disabled]="disabled" [icon]="icon"
    (onClick)="onClick($event)"></lib-button>`,
});


export const Base = Template.bind({});
Base.args = {
    type: '',
    size: '',
    label: 'Prova',
    icon: '',
    disabled: false,
    //@ts-ignore
    onClick: (event: boolean) => { console.log(event) }
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */