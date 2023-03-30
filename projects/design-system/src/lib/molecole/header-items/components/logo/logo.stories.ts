import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LogoComponent } from "./logo.component";

// This exports the Stories group for this component
export default {
  title: 'Components/Molecole/Logo',
  // The component related to the Stories
  component: LogoComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [LogoComponent],
       imports: [ ...primeComponentsCommonModule],
    }),
  ],
};

// This creates a Story for the component
const Template: Story<LogoComponent & { click: () => void }> = (args) => ({
  component: LogoComponent,
  props: {
    text1: args.text1,
    text2: args.text2,
    secondLogo: args.secondLogo,
    secondLogoPath: args.secondLogoPath,
    logoPath: args.logoPath
  },
  template: `
<lib-logo
[text1]="text1"
[text2]="text2"
[secondLogo]="secondLogo"
[secondLogoPath]="secondLogoPath"
[logoPath]="logoPath"
>
</lib-logo>`,
});

// PRIMARY GPG
export const Base = Template.bind({});
Base.args = {
  text1: 'Global',
  text2: 'Document Management',
  logoPath: 'assets/svg/logo.svg',
  secondLogoPath: 'assets/svg/logo.svg',
  secondLogo: false
};
