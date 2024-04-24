
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AddressComponent } from './address.component';
import { LibAddressModule } from '../lib-address.module';


const meta: Meta<AddressComponent> = {
  title: 'Components/Atomi/Address',
  // The component related to the Stories
  component: AddressComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, LibAddressModule],
    }),
  ]
};
export default meta;

type Story = StoryObj<AddressComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    address: {code: 0, content: 'Via Roma, 22 - 71122 Foggia (FG)', name: 'Casa mia'},
    //modify: true,
    //@ts-ignore
    onClick: () => { console.log('Modify') }
  },
}
