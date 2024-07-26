import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileStatusComponent } from './components/file-status.component';
import { FileModule } from '../file/file.module';
import { LibTagModule } from '../../atoms/tag/lib-tag.module';
import {LibButtonModule} from "../../atoms/button/lib-button.module";


const exportComponent = [
    FileStatusComponent
];

@NgModule({
    declarations: [
        ...exportComponent
    ],
    imports: [
        CommonModule,
        FileModule,
        LibTagModule,
      LibButtonModule
    ],
    exports: [
        ...exportComponent,
    ],
    entryComponents: [
        ...exportComponent
    ]
})
export class FileStatusModule { }
