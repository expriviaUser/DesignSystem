
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderMenuComponent } from './header-menu.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Layout/Subheader',
    // The component related to the Stories
    component: HeaderMenuComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ComponentsModule],
        }),
    ],
};

// This creates a Story for the component
const Template: Story<HeaderMenuComponent> = (args) => ({
    component: HeaderMenuComponent,
    props: {
        items: args.items
    },
    template: `
    <lib-header-menu [items]="items">
    </lib-header-menu>`,
});


export const Base = Template.bind({});
Base.args = {
    items: [{label: 'Prova1'}, {label: 'Prova2'}]
};
