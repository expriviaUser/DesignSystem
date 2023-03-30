
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { TabViewModule } from 'primeng/tabview';
import { TabsComponent } from './tabs.component';

// This exports the Stories group for this component
export default {
    title: 'Components/Atomi/Tabs',
    // The component related to the Stories
    component: TabsComponent,
    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [TabsComponent],
             imports: [ ...primeComponentsCommonModule, TabViewModule],
        }),
    ],
    argTypes: {
        sections: {
          type: {header: 'string', isDisabled: false, content: '', isSelected: false}
        },
      },
};

// This creates a Story for the component
const Template: Story<TabsComponent> = (args) => ({
    component: TabsComponent,
    props: {
        sections: args.sections,
        contents: args.contents
    },
    template: `
    <lib-tabs [sections]="sections" [contents]="externalContent">
    <ng-template #externalContent let-data="data">
        <h1>Prova esterna</h1>
        <p>{{data}}</p>
    </ng-template>
    </lib-tabs>`,
});


export const Base = Template.bind({});
Base.args = {
    sections: [{header: 'Prova1',isDisabled: false, content: '',isSelected: false}, {header: 'Prova2', isDisabled: false, content: 'Contenuto prova2', isSelected: false}]
};


/* export const Success = Template.bind({});
Success.args = {
  tagLabel: "Success",
  tagSeverity: "success",
  tagRounded: false,
  tagIcon: "pi-user"
}; */