import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './components/file.component';
import { LibCheckboxModule } from '../../atoms/checkbox/lib-checkbox.module';

const exportComponent = [
    FileComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        CommonModule,
        LibCheckboxModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})

export class FileModule { }
