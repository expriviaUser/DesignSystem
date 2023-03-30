import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { BreadcrumbComponent } from './breadcrumb.component';

// This exports the Stories group for this component
export default {
  title: 'Components/Molecole/Breadcrumb',
  // The component related to the Stories
  component: BreadcrumbComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [BreadcrumbComponent],
       imports: [ ...primeComponentsCommonModule],
    }),
  ]
};

const BREAD_CRUMB_LIST = [
  { name: 'Home', active: false, link: '#' },
  { name: 'Path 1', active: false, link: '#/path1' },
  { name: 'Path 2', active: false, link: '#/path1/path2' },
  { name: 'Path 3', active: false, link: '#/path1/path32' },
  { name: 'Path 4', active: true, link: '#/path1/path42' },
];

// This creates a Story for the component
const Template: Story<BreadcrumbComponent> = (args) => ({
  component: BreadcrumbComponent,
  props: {
    breadcrumbList: args.breadcrumbList,
    href: args.href,
    goTo: args.goTo
  },
  template: `
<app-breadcrumb
[breadcrumbList]="breadcrumbList"
[href]="href"
(goTo)="goTo($event)"
>
</app-breadcrumb>`,
});

export const SimpleBreadCrumb = Template.bind({});
SimpleBreadCrumb.args = {
  breadcrumbList: BREAD_CRUMB_LIST,
  href: false,
  // @ts-ignore
  goTo: (option: string) => alert(`Go to: ${option}`)
};

