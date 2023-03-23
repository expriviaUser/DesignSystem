import { CommonModule, DatePipe } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputComponent } from './input-form.component';
import { ComponentsModule } from 'src/app/components/components.module';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Form/Input',
    // The component related to the Stories
    component: InputComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, ComponentsModule],
            providers: [DatePipe]
        }),
    ],

    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['text', 'dropdown', 'number', 'calendar', 'autocomplete', 'static', 'checkbox', 'radio', 'dropdown-sort', 'textarea'],
        },
    }

};

// This creates a Story for the component
const Template: Story<InputComponent> = (args) => ({
    component: InputComponent,
    props: {
        value: args.value,
        valueInput: args.valueInput,
        clear: args.clear,
        icon: args.icon,
        sortParam: args.sortParam,
        label: args.label,
        type: args.type,
        error: args.error,
        inputDisabled: args.inputDisabled,
        placeholder: args.placeholder,
        formControlName: args.formControlName,
        selectedValue: args.selectedValue,
        form: new FormGroup({
            control0: new FormControl(
                'ciao', [
                Validators.required,])
        }),
    },
    template: `
    <form [formGroup]="form">
    <lib-input
    [valueInput]="valueInput"
    [placeholder]="placeholder"
    [label]="label"
    [clear]="clear"
    [icon]="icon"
    [sortParam]="sortParam"
    [type]="type"
    [value]="value"
    [error]="error"
    [inputDisabled]="inputDisabled"
    [formControlName]="formControlName"
    (selectedValue)="selectedValue($event)"
    
    >
    </lib-input>
    </form>`,
});


export const Base = Template.bind({});
Base.args = {
    value: '',
    valueInput: [{name: 'ciao', code: 'ciao'},{name: 'ciao1', code: 'ciao'}],
    clear: false,
    icon: '',
    sortParam: '',
    label: 'Prova',
    type: 'text',
    error: new FormControl().getError('required'),
    inputDisabled: false,
    placeholder: 'Inserisci valore',
    formControlName: 'control0',
    //@ts-ignore
    selectedValue: (event: any) => { console.log(event) },
};


