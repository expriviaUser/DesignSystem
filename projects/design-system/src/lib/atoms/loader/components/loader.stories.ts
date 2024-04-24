
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader.component';
import { LibLoaderModule } from '../lib-loader.module';
import { Injector } from '@angular/core';
import { LoaderService } from '../services/loader.service';


const meta: Meta<LoaderComponent> = {
  title: 'Components/Atomi/Loader',
  // The component related to the Stories
  component: LoaderComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibLoaderModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<LoaderComponent>;

export const Text: Story = {
  name: 'Default',
  play: () => {
    const service = new LoaderService();
    service.showHide(true);
  },
}