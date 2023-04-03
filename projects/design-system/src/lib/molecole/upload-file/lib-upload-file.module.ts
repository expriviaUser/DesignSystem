import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './components/upload-file.component';
import { LibProgressBarModule } from '../../atoms/progress-bar/lib-progress-bar.module';

const exportComponent = [
   UploadFileComponent
];

@NgModule({
    declarations: [
        ...exportComponent,
    ],
    imports: [
        CommonModule,
        LibProgressBarModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class LibUploadFileModule { }
