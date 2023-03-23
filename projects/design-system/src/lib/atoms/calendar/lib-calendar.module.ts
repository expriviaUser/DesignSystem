import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './components/calendar.component';


const primeComponents = [
    CalendarModule
];

const exportComponent = [
    CalendarComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents
    ],
    exports: [
        ...exportComponent,
        ...primeComponents
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class LibCalendarModule { }
