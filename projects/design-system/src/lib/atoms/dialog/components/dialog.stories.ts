
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { DialogModule } from 'primeng/dialog';
import { ComponentsModule } from '../../components.module';
import { ButtonComponent } from '../button/button.component';
import { DialogComponent } from './dialog.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Dialog',
    // The component related to the Stories
    component: DialogComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [],
             imports: [ ...primeComponentsCommonModule, DialogModule, BrowserAnimationsModule, ComponentsModule],
        }),
    ]
};

// This creates a Story for the component
const Template: Story<DialogComponent> = (args) => ({
    component: DialogComponent,
    props: {
        visible: args.visible,
        title: args.title,
        closable: args.closable,
    },
    template: `
    <lib-dialog [title]="title" [visible]="visible" [closable]="closable" >
            <ng-container body>
            <p>Questo è il contenuto di una dialog</p>
            </ng-container>
            <ng-container footer>
            <lib-button size="small" type="primary" label="button"></lib-button>
            </ng-container>
    </lib-dialog>`,
});


export const Base = Template.bind({});
Base.args = {
    visible: true,
    title: 'Dialog',
    closable: true,
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */