import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchBarComponent } from './search-bar.component';

// This exports the Stories group for this component
export default {
  title: 'Components/Molecole/Search-bar',
  // The component related to the Stories
  component: SearchBarComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [],
       imports: [ ...primeComponentsCommonModule, ComponentsModule],
    }),
  ],
};

// This creates a Story for the component
const Template: Story<SearchBarComponent & { click: () => void }> = (args) => ({
  component: SearchBarComponent,
  props: {
    
  },
  template: `
<lib-search-bar>
</lib-search-bar>`,
});

// PRIMARY GPG
export const Base = Template.bind({});
Base.args = {
 
};
