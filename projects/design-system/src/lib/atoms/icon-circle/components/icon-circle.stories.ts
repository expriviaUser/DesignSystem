
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ComponentsModule } from '../../components.module';
import { IconCircleComponent } from './icon-circle.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Icon-circle',
    // The component related to the Stories
    component: IconCircleComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ComponentsModule],
        }),
    ],
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['info', 'help'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'big'],
        },
        tooltipPosition: {
            control: {
                type: 'select',
            },
            options: ['left', 'top', 'bottom', 'right'],
        },
    },
};

// This creates a Story for the component
const Template: Story<IconCircleComponent> = (args) => ({
    component: IconCircleComponent,
    props: {
        icon: args.icon,
        type: args.type,
        size: args.size,
        tooltipSize: args.tooltipSize,
        tooltipText: args.tooltipText,
        tooltipPosition: args.tooltipPosition
    },
    template: `
    <div style="width:100%; height: 200px; display: flex; justify-content: center; align-items: flex-end">
    <lib-icon-circle [icon]="icon" [type]="type" [size]="size" [tooltipSize]="tooltipSize" [tooltipText]="tooltipText" [tooltipPosition]="tooltipPosition">
    </lib-icon-circle>
    </div>`,
});


export const Base = Template.bind({});
Base.args = {
    icon: 'pi pi-user',
    type: 'info',
    size: '',
    tooltipSize: 'md-tooltip',
    tooltipText: "<h4 style='margin:10px 0'>NOTE</h4> Inserire il periodo di validità in alternativa tra: </br> -Periodo dal al; </br> -Solo data inizio periodo; </br> -Periodo massimo di giorni;",
    tooltipPosition: 'right'
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */