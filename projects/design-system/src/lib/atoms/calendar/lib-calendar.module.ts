import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CalendarComponent } from './components/calendar.component';
import { TranslateModule } from '@ngx-translate/core';


const primeComponents = [
    CalendarModule,

];

const exportComponent = [
    CalendarComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ],
    providers: [DatePipe]
})

export class LibCalendarModule { }
