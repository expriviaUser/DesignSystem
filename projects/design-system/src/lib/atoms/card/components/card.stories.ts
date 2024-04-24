import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CardModule } from 'primeng/card';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Atomi/Card',
  // The component related to the Stories
  component: CardComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, CardModule],
    }),
  ]
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    cHeader: 'Prova',
    cSubHeader: 'Prova sottotitolo',
  },
  render: (args) => ({
    props: args,
    template: ` 
  <lib-card [cHeader]="" [cSubHeader]="" [cStyle]="style" [cStyleClass]="styleClass">     
      <div cTitleTemplate>${args.cHeader}</div>
      <div cSubtitleTemplate>${args.cSubHeader}</div>
      <div cContentTemplate>Questo è il contenuto di una card</div>
      <div cFooterTemplate>Questo è il footer di una card</div>
  </lib-card>
 `})
};
/* export const Base: Story = {
  args: {
    type: '',
    size: '',
    label: 'Prova',
    icon: '',
    disabled: false,
    //@ts-ignore
    onClick: (event: boolean) => { console.log(event) }
  },
} */

