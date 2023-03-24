import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ComponentsModule } from '../../components.module';
import { RadioTileComponent } from './radio-tile.component';


// This exports the Stories group for this component
export default {
    title: 'Components/Molecole/RadioTiles',
    // The component related to the Stories
    component: RadioTileComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [CommonModule, ComponentsModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<RadioTileComponent> = (args) => ({
    component: RadioTileComponent,
    props: {
        myTiles: args.tiles
    },
    template: `
    <lib-radio-tile [tiles]="myTiles">
    </lib-radio-tile>`,
});


export const Base = Template.bind({});
Base.args = {
    tiles: [
        {
            showHeaderAction: true,
            title: "Nome Sede 1",
            content: "Via Tal dei Tali Roma, RM (123456)",
            radioName: "nome-sede-1",
            radioValue: "1",
            radioDisabled: false
        },
        {
            showHeaderAction: false,
            title: "Nome Sede 2",
            content: "Via Tal dei Tali Roma, RM (123456)",
            radioName: "nome-sede-2",
            radioValue: "2",
            radioDisabled: false
        }
    ]
};
