
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { BadgeModule } from 'primeng/badge';
import { BadgeComponent } from './badge.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Badge',
    // The component related to the Stories
    component: BadgeComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [BadgeComponent],
             imports: [ ...primeComponentsCommonModule, BadgeModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<BadgeComponent> = (args) => ({
    component: BadgeComponent,
    props: {
        menuBadge: args.menuBadge
    },
    template: `
    <lib-badge [menuBadge]="menuBadge"></lib-badge>`,
});


export const Base = Template.bind({});
Base.args = {
    menuBadge: '0'
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */