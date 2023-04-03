import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from '../models/file-upload.model';

@Component({
    selector: 'lib-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
    @Input() file!: FileUpload;


    srcIcon!: string;

    iconArray = [
        { extensions: ['doc', 'docx', 'txt', 'docm', 'dotm', 'dot', 'dotx'], path: 'assets/svg/microsoft-word.svg' },
        { extensions: ['pdf'], path: 'assets/svg/pdf.svg' },
        { extensions: ['xls', 'xlsx', 'xlsm', 'xlsb', 'xltx', 'xlt', 'csv'], path: 'assets/svg/microsoft-excel.svg' },
        { extensions: ['ppt', 'pptx', 'pptm', 'xps', 'potx', 'ppsx', 'pps', 'odp', ''], path: 'assets/svg/microsoft-powerpoint.svg' },
        { extensions: ['zip', 'rar'], path: 'assets/svg/zip.svg' },
    ];

    ngOnInit() {
        let lastIndex = this.file.title.lastIndexOf('.');
        if (lastIndex > 0)
            this.srcIcon = this.iconArray.filter(item => item.extensions.includes(this.file.title.substring(lastIndex + 1, this.file.title.length)))[0].path;
    }
}
