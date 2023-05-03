import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

@Component({
    selector: 'lib-choose-file',
    templateUrl: './choose-file.component.html',
    styleUrls: ['./choose-file.component.scss']
})
export class ChooseFileComponent {
    @Input() label!: string;
    @Input() acceptExtensions: string = 'image/*';
    @Input() maxFileSize!: number;
    @Input() icon!: string;

    @Output() onLoadFile: EventEmitter<any> = new EventEmitter<any>();

    get inputValue(): string {
        return this.returnFileName();
    };
    protected arrayFiles: File[] = [];

    @ViewChild('uploader', { static: false }) protected uploader!: FileUpload;

    onSelect(event: any) {
        /*let filesName: string[] = [];
        console.log(event.currentFiles);
        event.currentFiles.forEach((file: File) => {
            this.arrayFiles.push(file);
            filesName.push(file.name);
        })
        this.uploader.clear();*/
      this.onLoadFile.emit(event);
    }

    clearFile() {
        this.uploader.clear();
        this.arrayFiles = [];
    }

    returnFileName() {
        let initValue: string = '';
        let filesNames = this.arrayFiles.reduce((accumulator, currentValue, index) => accumulator + currentValue.name + (this.arrayFiles.length-1 > index ? ', ' : ''), initValue);

        return filesNames;
    }



}
