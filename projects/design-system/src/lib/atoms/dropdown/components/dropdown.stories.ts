import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { DropdownModule } from "primeng/dropdown";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownComponent } from './dropdown.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Form/Dropdown',
    // The component related to the Stories
    component: DropdownComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [DropdownComponent],
             imports: [ ...primeComponentsCommonModule, DropdownModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
        }),
    ],

    argTypes: {
    }

};

// This creates a Story for the component
const Template: Story<DropdownComponent> = (args) => ({
    component: DropdownComponent,
    props: {
        valueDropdown: args.valueDropdown,
        label: args.label,
        placeholder: args.placeholder,
        clear: args.clear,
        control: args.control,
        selectedValue: args.selectedValue,
        value: args.value
    },
    template: `
    <form>
    <lib-dropdown
    [valueDropdown]="valueDropdown"
    [control]="control"
    [placeholder]="placeholder"
    [label]="label"
    [clear]="clear"
    (selectedValue)="selectedValue($event)"
    [value]="value"
    
    >
    </lib-dropdown>
    </form>`,
});


export const Base = Template.bind({});
Base.args = {
    valueDropdown: [
        'Value1',
        'Value2',
        'Value3',
        'Value4',
    ],
    label: 'prova',
    placeholder: 'Inserisci valore',
    clear: false,
    control: new FormControl(),
    //@ts-ignore
    selectedValue: (event: any) => {console.log(event)},
    value: ''
};

