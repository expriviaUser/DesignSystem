
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { LibAccordionModule } from '../lib-accordion.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const meta: Meta<AccordionComponent> = {
  title: 'Components/Atomi/Accordion',
  // The component related to the Stories
  component: AccordionComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, LibAccordionModule, BrowserAnimationsModule],
    }),
  ]
};
export default meta;

type Story = StoryObj<AccordionComponent>;

export const Base: Story = {
  args: {
    multiple: false,
    index: 0,
    sections: [{header: 'prova1'}, {header: 'prova2'}],
    //@ts-ignore
    //activeIndexChange: (event: any) => { this.index = event.args }
  }
}
