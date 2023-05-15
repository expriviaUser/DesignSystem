import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ChooseFileComponent } from './components/choose-file.component';
import { LibInputModule } from '../input/lib-input.module';


const primeComponents = [
    FileUploadModule,

];

const exportComponent = [
    ChooseFileComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        ...primeComponents,
        CommonModule,
        LibInputModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})


export class LibChooseFileModule { }
