
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { RadioButtonComponent } from './radio-button.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Radio/Radio-button',
    // The component related to the Stories
    component: RadioButtonComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [RadioButtonComponent],
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
        }),
    ],
    argTypes: {

    },
};

// This creates a Story for the component
const Template: Story<RadioButtonComponent> = (args) => ({
    component: RadioButtonComponent,
    props: {
        labels: args.labels,
        formControlName: args.formControlName,
        disabled: args.disabled,
        name: args.name,
        value: args.value,
        form: new FormGroup({
            control0: new FormControl(
                '', [
                ])
        }),
    },
    template: `
    <form [formGroup]="form">
    <lib-radio-button [labels]="labels" [formControlName]="formControlName" [disabled]="disabled" [name]="name" [value]="value">
    </lib-radio-button>
    </form>`,
});


export const Base = Template.bind({});
Base.args = {
    labels: ['Prova', 'Prova1', 'Prova2'],
    disabled: false,
    name: 'prova',
    value: '',
    formControlName: 'control0'
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */