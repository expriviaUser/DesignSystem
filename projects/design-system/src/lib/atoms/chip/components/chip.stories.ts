import {CommonModule} from '@angular/common';
import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {ChipComponent} from "./chip.component";
import {ChipModule} from "primeng/chip";

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Chip',
    // The component related to the Stories
    component: ChipComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [ChipComponent],
             imports: [ ...primeComponentsCommonModule, ChipModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<ChipComponent> = (args) => ({
    component: ChipComponent,
    props: {
        label: args.label,
        icon: args.icon,
        image: args.image,
        removable: args.removable,
        style: args.style,
        styleClass: args.styleClass,
        removeIcon: args.removeIcon
    },
    template: `
<lib-chip
[label]="label"
 [icon]="icon"
 [image]="image"
 [removable]="removable"
 [style]="style"
 [styleClass]="styleClass"
 [removeIcon]="removeIcon" >
</lib-chip>`,
});

export const SimpleChip = Template.bind({});
SimpleChip.args = {
    label: "testo",
    removable: true,
    removeIcon: "pi pi-times"
};

