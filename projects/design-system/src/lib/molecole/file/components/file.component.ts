import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { File } from '../models/file.model';

@Component({
    selector: 'lib-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
    @Input() file!: File;
    @Input() checkable: boolean = false;
    @Input() checkboxDisabled: boolean = false;
    @Input() checked: boolean = false;
    @Input() ellipsed: boolean = true;
    @Input() isBig: boolean = true;

    srcIcon!: string;

    iconArray = [
        { extensions: ['doc', 'docx', 'txt', 'docm', 'dotm', 'dot', 'dotx'], path: 'assets/svg/microsoft-word.svg' },
        { extensions: ['pdf'], path: 'assets/svg/pdf.svg' },
        { extensions: ['xls', 'xlsx', 'xlsm', 'xlsb', 'xltx', 'xlt', 'csv'], path: 'assets/svg/microsoft-excel.svg' },
        { extensions: ['ppt', 'pptx', 'pptm', 'xps', 'potx', 'ppsx', 'pps', 'odp', ''], path: 'assets/svg/microsoft-powerpoint.svg' },
        { extensions: ['zip', 'rar'], path: 'assets/svg/zip.svg' },
        { extensions: ['png', 'tiff', 'jpeg', 'jpg'], path: 'assets/svg/img.svg' },
        //TIFF image to add
    ];

    @Output() fileSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit() {
        let lastIndex = this.file.title.lastIndexOf('.');
        if (lastIndex > 0) {
            const extension = this.iconArray.filter(item => item.extensions.includes(this.file.title.substring(lastIndex + 1, this.file.title.length).toLocaleLowerCase()));
            if (extension.length > 0)
                this.srcIcon = extension[0].path;
        }

    }

    fileToggle(event: boolean) {
        this.fileSelected.emit(event);
    }
}
