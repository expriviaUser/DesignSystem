
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckboxButtonComponent } from './checkbox-button.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Checkbox',
    // The component related to the Stories
    component: CheckboxButtonComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [CheckboxButtonComponent],
            imports: [CommonModule, CheckboxModule, FormsModule],
        }),
    ],
    /* argTypes: {
      tagSeverity: {
        control: {
          type: 'select',
        },
        options: ['info', 'disable', 'success', 'lightInformation', 'warning', 'danger', 'lightAlert', 'informationReverse', 'successReverse'],
      },
    }, */
};

// This creates a Story for the component
const Template: Story<CheckboxButtonComponent> = (args) => ({
    component: CheckboxButtonComponent,
    props: {
        checked: args.checked,
        disabled: args.disabled,
        label: args.label,
        emitChange: args.emitChange
    },
    template: `
<lib-checkbox-button [checked]="checked" [disabled]="disabled" [label]="label" (emitChange)="emitChange($event)">
</lib-checkbox-button>`,
});


export const Base = Template.bind({});
Base.args = {
    checked: true,
    disabled: false,
    label: "Check",
    //@ts-ignore
    emitChange: (event: boolean) => { console.log(event) }
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */