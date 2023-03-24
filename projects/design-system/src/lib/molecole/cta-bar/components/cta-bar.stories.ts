
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ComponentsModule } from '../../components.module';
import { CtaBarComponent } from './cta-bar.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Molecole/Cta-bar',
    // The component related to the Stories
    component: CtaBarComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, ComponentsModule],
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
const Template: Story<CtaBarComponent> = (args) => ({
    component: CtaBarComponent,
    props: {
        isMain: args.isMain
    },
    template: `
    <lib-cta-bar [isMain]="isMain">
        <ng-container back>
            <lib-button label="Indietro" size="small" type="secondary" [disabled]="false"></lib-button>
        </ng-container>

        <ng-container middle>
            <lib-button label="Bottone centrale" size="small" type="link" [disabled]="false"></lib-button>
        </ng-container>
        <ng-container cta>
            <lib-button label="Annulla" size="small" type="secondary" [disabled]="false"></lib-button>
            <lib-button label="Avanti" size="small" type="primary" [disabled]="false"></lib-button>
        </ng-container>
    </lib-cta-bar>`,
});


export const Base = Template.bind({});
Base.args = {
   isMain: false
};
