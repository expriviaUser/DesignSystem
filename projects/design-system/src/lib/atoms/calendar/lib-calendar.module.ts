import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './components/calendar.component';


const primeComponents = [
    CalendarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
