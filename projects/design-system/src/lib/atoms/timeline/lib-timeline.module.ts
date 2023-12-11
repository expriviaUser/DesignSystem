import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/timeline.component';
import { TimelineModule } from 'primeng/timeline';

const primeComponents = [
    TimelineModule,

];

const exportComponent = [
    TimelineComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        CommonModule,
        ...primeComponents,
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class LibTimelineModule { }
