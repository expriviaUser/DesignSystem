import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';


const meta: Meta<BreadcrumbComponent> = {
  title: 'Components/Molecole/Breadcrumb',
  // The component related to the Stories
  component: BreadcrumbComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [BreadcrumbComponent],
       imports: [ CommonModule],
    }),
  ]
};
export default meta;


const BREAD_CRUMB_LIST = [
  { name: 'Home', active: false, link: '#' },
  { name: 'Path 1', active: false, link: '#/path1' },
  { name: 'Path 2', active: false, link: '#/path1/path2' },
  { name: 'Path 3', active: false, link: '#/path1/path32' },
  { name: 'Path 4', active: true, link: '#/path1/path42' },
];

type Story = StoryObj<BreadcrumbComponent>;

/* export const Base: Story = {
  args: {
    breadcrumbs$
    breadcrumbList: BREAD_CRUMB_LIST,
    href: false,
    // @ts-ignore
    goTo: (option: string) => alert(`Go to: ${option}`)
  }
} */




