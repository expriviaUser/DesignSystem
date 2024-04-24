import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { DialogModule } from 'primeng/dialog';
import { CtaBarModule } from '../../../molecole/cta-bar/cta-bar.module';
import { LibButtonModule } from '../../button/lib-button.module';
import { LibDialogModule } from '../lib-dialog.module';
import { DialogComponent } from './dialog.component';

const meta: Meta<DialogComponent> = {
  title: 'Components/Atomi/Dialog',
  // The component related to the Stories
  component: DialogComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, LibDialogModule, DialogModule, LibButtonModule, CtaBarModule, BrowserAnimationsModule],
    }),
  ],
};
export default meta;

type Story = StoryObj<DialogComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    title: "Modale",
    subtitle: "Sottotitolo ",
    visible: true
  },
  render: (args) => ({
    props: args,
    template: `
    
<lib-dialog [closable]="${args.closable}" [title]="'${args.title}'" [subtitle]="'${args.subtitle}'" [visible]="${args.visible}"
  >
  <ng-container body>
    Testo di prova
  </ng-container>
  <ng-container footer>
    <lib-cta-bar>
      <ng-container cta>
        <lib-button [size]="'small'" [label]="'Conferma'"></lib-button>
      </ng-container>
    </lib-cta-bar>
  </ng-container>
</lib-dialog>
 `})
};

