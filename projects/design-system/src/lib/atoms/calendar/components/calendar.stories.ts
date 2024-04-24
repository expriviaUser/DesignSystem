
import { CommonModule } from '@angular/common';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { LibCalendarModule } from '../lib-calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const meta: Meta<CalendarComponent> = {
  title: 'Components/Atomi/Calendar',
  // The component related to the Stories
  component: CalendarComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [CommonModule, LibCalendarModule, BrowserAnimationsModule],
    }),
  ]
};
export default meta;

type Story = StoryObj<CalendarComponent>;

export const Base: Story = {
  name: 'Default',
  args: {
    value: null,
    label: '',
    disabled: false,
    inlineCal: false,
    showIcon: true,
    dropdownMode: false,
    showButtonBar: false,
    selectionType: 'single',
    placeholder: 'Data',
    minDate: null,
    maxDate: null,
    defaultDateFormat: 'dd-mm-yy',
    highlightedDays: [],
    firstDayOfWeek: null,
    disabledDays: [],
    timeOnly: false,
    dataType: 'date',
    //@ts-ignore
    onSelect: (event: any) => { console.log(event) }
  }
}
