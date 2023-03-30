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
    @Input() checked: boolean = false;

    srcIcon!: string;

    iconArray = [
        { extensions: ['doc', 'docx', 'txt', 'docm', 'dotm', 'dot', 'dotx'], path: 'assets/svg/microsoft-word.svg' },
        { extensions: ['pdf'], path: 'assets/svg/pdf.svg' },
        { extensions: ['xls', 'xlsx', 'xlsm', 'xlsb', 'xltx', 'xlt', 'csv'], path: 'assets/svg/microsoft-excel.svg' },
        { extensions: ['ppt', 'pptx', 'pptm', 'xps', 'potx', 'ppsx', 'pps', 'odp', ''], path: 'assets/svg/microsoft-powerpoint.svg' },
        { extensions: ['zip', 'rar'], path: 'assets/svg/zip.svg' },
    ];

    @Output() fileSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit() {
        let lastIndex = this.file.title.lastIndexOf('.');
        if (lastIndex > 0)
            this.srcIcon = this.iconArray.filter(item => item.extensions.includes(this.file.title.substring(lastIndex + 1, this.file.title.length)))[0].path;

    }

    fileToggle(event: boolean) {
        this.fileSelected.emit(event);
    }
}
